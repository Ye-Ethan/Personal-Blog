<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  exclude-result-prefixes="atom">
  <xsl:output method="html" encoding="UTF-8" indent="no"/>

  <xsl:template match="/">
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><xsl:value-of select="/rss/channel/title"/></title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            max-width: 800px;
            margin: 2rem auto;
            padding: 0 1rem;
            background: #f9fafb;
            color: #1f2937;
            line-height: 1.6;
          }
          h1 {
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 0.5rem;
          }
          .item {
            background: white;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .item h2 {
            margin: 0 0 0.2rem 0;
          }
          .item h2 a {
            color: #2563eb;
            text-decoration: none;
          }
          .item h2 a:hover {
            text-decoration: underline;
          }
          .meta {
            font-size: 0.9rem;
            color: #6b7280;
            margin-bottom: 0.5rem;
          }
          .description {
            margin: 0.5rem 0 0 0;
            white-space: pre-wrap;
          }
          .footer {
            margin-top: 2rem;
            font-size: 0.9rem;
            color: #6b7280;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="/rss/channel/title"/></h1>
        <p><xsl:value-of select="/rss/channel/description"/></p>
        <xsl:for-each select="/rss/channel/item">
          <div class="item">
            <h2>
              <a href="{link}"><xsl:value-of select="title"/></a>
            </h2>
            <div class="meta">
              <xsl:if test="pubDate">
                发布于 <xsl:value-of select="pubDate"/>
              </xsl:if>
            </div>
            <div class="description">
              <xsl:value-of select="description"/>
            </div>
          </div>
        </xsl:for-each>
        <div class="footer">
          <a href="/">返回首页</a> · 使用 <a href="https://www.astro.build">Astro</a> 构建
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>