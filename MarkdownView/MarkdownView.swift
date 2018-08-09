import UIKit
import WebKit

open class MarkdownView: UIView {

  public  var webView: WKWebView?

  public var isScrollEnabled: Bool = true {

    didSet {
      webView?.scrollView.isScrollEnabled = isScrollEnabled
    }

  }

  public var onTouchLink: ((URLRequest) -> Bool)?
   /// 点击图片回调
  public var onTouchClick:((String)->Void)?

  public var onRendered: ((CGFloat) -> Void)?

  public convenience init() {
    self.init(frame: CGRect.zero)
  }

  override init (frame: CGRect) {
    super.init(frame : frame)
  }

  public required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }

  public func load(markdown: String?, enableImage: Bool = true) {
    guard var markdown = markdown else { return }
    // 如果是以分割线开始的markdown样式就会加载不出来分割线下边的东西
    // 只有在分割线前边插入一个换行符或者空格(效果都是新增一行)
    if markdown.hasPrefix("<hr>") {
        markdown.insert(contentsOf: "<br>", at: markdown.startIndex)
    }

    let bundle = Bundle(for: MarkdownView.self)

    var htmlURL: URL?
    if bundle.bundleIdentifier?.hasPrefix("org.cocoapods") == true {
      htmlURL = bundle.url(forResource: "index",
                           withExtension: "html",
                           subdirectory: "MarkdownView.bundle")
    } else {
      htmlURL = bundle.url(forResource: "index",
                           withExtension: "html")
    }

    if let url = htmlURL {
      let templateRequest = URLRequest(url: url)

      let escapedMarkdown = self.escape(markdown: markdown) ?? ""
      let imageOption = enableImage ? "true" : "false"
      let script = "window.showMarkdown('\(escapedMarkdown)', \(imageOption));"
      let userScript = WKUserScript(source: script, injectionTime: .atDocumentEnd, forMainFrameOnly: true)

      let controller = WKUserContentController()
      controller.addUserScript(userScript)

      let configuration = WKWebViewConfiguration()
      configuration.userContentController = controller
      let wv = WKWebView(frame: self.bounds, configuration: configuration)
      wv.scrollView.isScrollEnabled = self.isScrollEnabled
      wv.translatesAutoresizingMaskIntoConstraints = false
      wv.navigationDelegate = self
      addSubview(wv)
      wv.topAnchor.constraint(equalTo: self.topAnchor).isActive = true
      wv.bottomAnchor.constraint(equalTo: self.bottomAnchor).isActive = true
      wv.leadingAnchor.constraint(equalTo: self.leadingAnchor).isActive = true
      wv.trailingAnchor.constraint(equalTo: self.trailingAnchor).isActive = true
      wv.backgroundColor = self.backgroundColor

      self.webView = wv

      wv.load(templateRequest)
    } else {
      // TODO: raise error
    }
  }

  private func escape(markdown: String) -> String? {
    return markdown.addingPercentEncoding(withAllowedCharacters: CharacterSet.alphanumerics)
  }

}

extension MarkdownView: WKNavigationDelegate {

  public func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
    let script = "document.body.offsetHeight;"
    webView.evaluateJavaScript(script) { [weak self] result, error in
      if let _ = error { return }

      if let height = result as? CGFloat {
        self?.onRendered?(height)
      }
    }
  }

  public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
    switch navigationAction.navigationType {
    case .linkActivated:
      if let onTouchLink = onTouchLink, onTouchLink(navigationAction.request) {
        decisionHandler(.allow)
      } else {
        decisionHandler(.cancel)
      }
    default:
        ///如果是点击图片，不让跳转新的网页
        if (navigationAction.request.url?.absoluteString.hasPrefix("tsimage:"))! {
            self.onTouchClick?(navigationAction.request.url?.absoluteString ?? "")
             decisionHandler(.cancel)
        } else {
            decisionHandler(.allow)
        }
    }
  }
}


