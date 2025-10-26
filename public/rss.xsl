<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
<html>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            line-height: 1.6;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        .header p {
            font-size: 1.1rem;
            opacity: 0.95;
        }
        
        .rss-info {
            background: #f8f9fa;
            padding: 30px;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .rss-info h2 {
            color: #667eea;
            margin-bottom: 15px;
            font-size: 1.5rem;
        }
        
        .rss-url {
            background: white;
            padding: 15px;
            border-radius: 8px;
            border: 2px solid #667eea;
            font-family: monospace;
            font-size: 0.95rem;
            word-break: break-all;
            margin: 15px 0;
        }
        
        .instructions {
            background: #e3f2fd;
            padding: 20px;
            border-radius: 8px;
            margin-top: 15px;
        }
        
        .instructions h3 {
            color: #1976d2;
            margin-bottom: 10px;
        }
        
        .instructions ul {
            margin-left: 20px;
        }
        
        .instructions li {
            margin: 8px 0;
        }
        
        .instructions a {
            color: #1976d2;
            text-decoration: none;
            font-weight: 600;
        }
        
        .instructions a:hover {
            text-decoration: underline;
        }
        
        .items {
            padding: 30px;
        }
        
        .items h2 {
            color: #333;
            margin-bottom: 25px;
            font-size: 1.8rem;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }
        
        .item {
            background: #f8f9fa;
            padding: 25px;
            margin-bottom: 20px;
            border-radius: 10px;
            border-left: 5px solid #667eea;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .item:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        
        .item-title {
            font-size: 1.4rem;
            margin-bottom: 10px;
        }
        
        .item-title a {
            color: #333;
            text-decoration: none;
            font-weight: 600;
        }
        
        .item-title a:hover {
            color: #667eea;
        }
        
        .item-meta {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 12px;
        }
        
        .item-category {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            margin-right: 10px;
        }
        
        .item-description {
            color: #555;
            line-height: 1.6;
        }
        
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #666;
            border-top: 1px solid #e0e0e0;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.8rem;
            }
            
            .container {
                border-radius: 0;
            }
            
            body {
                padding: 0;
            }
            
            .rss-info, .items {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📡 <xsl:value-of select="/rss/channel/title"/></h1>
            <p><xsl:value-of select="/rss/channel/description"/></p>
        </div>
        
        <div class="rss-info">
            <h2>🔔 Subscribe to this RSS Feed</h2>
            <p>Copy this URL and add it to your favorite RSS reader:</p>
            <div class="rss-url">
                <xsl:value-of select="/rss/channel/link"/>/rss.xml
            </div>
            
            <div class="instructions">
                <h3>How to Subscribe:</h3>
                <ul>
                    <li>Copy the URL above</li>
                    <li>Open your RSS reader (Feedly, Inoreader, etc.)</li>
                    <li>Click "Add Feed" or "Subscribe"</li>
                    <li>Paste the URL and confirm</li>
                </ul>
                <p style="margin-top: 15px;">
                    <strong>Popular RSS Readers:</strong><br/>
                    <a href="https://feedly.com" target="_blank">Feedly</a> • 
                    <a href="https://inoreader.com" target="_blank">Inoreader</a> • 
                    <a href="https://newsblur.com" target="_blank">NewsBlur</a> • 
                    <a href="https://theoldreader.com" target="_blank">The Old Reader</a>
                </p>
            </div>
        </div>
        
        <div class="items">
            <h2>📚 Latest Articles (<xsl:value-of select="count(/rss/channel/item)"/> items)</h2>
            
            <xsl:for-each select="/rss/channel/item">
                <div class="item">
                    <div class="item-title">
                        <a>
                            <xsl:attribute name="href">
                                <xsl:value-of select="link"/>
                            </xsl:attribute>
                            <xsl:attribute name="target">_blank</xsl:attribute>
                            <xsl:value-of select="title"/>
                        </a>
                    </div>
                    
                    <div class="item-meta">
                        <span class="item-category">
                            <xsl:value-of select="category"/>
                        </span>
                        <span class="item-date">
                            <xsl:value-of select="pubDate"/>
                        </span>
                    </div>
                    
                    <div class="item-description">
                        <xsl:value-of select="description"/>
                    </div>
                </div>
            </xsl:for-each>
        </div>
        
        <div class="footer">
            <p>
                <strong>Triatempora</strong> - Time is not a straight line<br/>
                <a href="https://triatempora.com" target="_blank">Visit Website</a>
            </p>
        </div>
    </div>
</body>
</html>
</xsl:template>

</xsl:stylesheet>
