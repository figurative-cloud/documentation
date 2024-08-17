import{_ as i,c as l,j as s,a as t,t as a,a4 as n,o as h}from"./chunks/framework.aUXblELp.js";const $=JSON.parse('{"title":"API Reference","description":"","frontmatter":{"api_name":"Inference API","api_names":"Inference APIs","functions_name":"Reason Function","functions_names":"Reason Functions"},"headers":[],"relativePath":"reference/api.md","filePath":"reference/api.md"}'),d={name:"reference/api.md"},r=s("h1",{id:"api-reference",tabindex:"-1"},[t("API Reference "),s("a",{class:"header-anchor",href:"#api-reference","aria-label":'Permalink to "API Reference"'},"​")],-1),p=s("p",null,"One endpoint to run them all 💯",-1),o={id:"run-frontmatter-api-name",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#run-frontmatter-api-name","aria-label":'Permalink to "Run {{$frontmatter.api_name}}"'},"​",-1),k=s("p",null,[s("code",null,"POST /api/v1/inference/request")],-1),c=s("h3",{id:"input-parameters",tabindex:"-1"},[t("Input Parameters "),s("a",{class:"header-anchor",href:"#input-parameters","aria-label":'Permalink to "Input Parameters"'},"​")],-1),E={tabindex:"0"},g=s("thead",null,[s("tr",null,[s("th",null,"Parameter"),s("th",null,"Type"),s("th",null,"Description"),s("th",null,"Required"),s("th",null,"Default")])],-1),m=s("td",null,[s("code",null,"apiId")],-1),b=s("td",null,"string",-1),y=s("td",null,"Yes",-1),_=s("td",null,null,-1),F=s("tr",null,[s("td",null,[s("code",null,"messages")]),s("td",null,[s("code",null,"Message"),t("[]")]),s("td",null,"An array of messages to send to the api"),s("td",null,"Yes"),s("td")],-1),q=s("tr",null,[s("td",null,[s("code",null,"threadId")]),s("td",null,"string, undefined"),s("td",null,"When passed, the message will be run on the provided thread. if no threadId is provided, each request will create a new thread and return its id"),s("td",null,"No"),s("td",null,"undefined")],-1),C=s("tr",null,[s("td",null,[s("code",null,"replyWith")]),s("td",null,"thread, message"),s("td",null,[t("Specifies how much data to return in reply. if no "),s("code",null,"replyWith"),t(" is provided, it defaults to message. Setting it to thread returns the entire conversation on the thread.")]),s("td",null,"No"),s("td",null,"message")],-1),f=n(`<p><code>Message</code>:</p><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th><th>Required</th><th>Default</th></tr></thead><tbody><tr><td><code>role</code></td><td>user, assitant</td><td>The role of the assumed sender of the message. Generally, this will be set to <code>user</code> for requests you initiate</td><td>Yes</td><td></td></tr><tr><td><code>content</code></td><td>string</td><td>The text content to send to the API. this can be JSON or in the form of a prompt. it Should contain function parameters</td><td>Yes</td><td></td></tr></tbody></table><h3 id="example-request" tabindex="-1">Example Request <a class="header-anchor" href="#example-request" aria-label="Permalink to &quot;Example Request&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;apiId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;api_ksodf&amp;s382js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;messages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;role&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get the weather in Berlin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;replyWith&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="output-parameters" tabindex="-1">Output Parameters <a class="header-anchor" href="#output-parameters" aria-label="Permalink to &quot;Output Parameters&quot;">​</a></h3>`,5),B={tabindex:"0"},x=s("thead",null,[s("tr",null,[s("th",null,"Parameter"),s("th",null,"Type"),s("th",null,"Description")])],-1),P=s("td",null,[s("code",null,"id")],-1),T=s("td",null,"string",-1),v=s("tr",null,[s("td",null,[s("code",null,"threadId")]),s("td",null,"string"),s("td",null,"Id of the thread on whicht he request was run")],-1),I=s("tr",null,[s("td",null,[s("code",null,"messages")]),s("td",null,[s("code",null,"Message")]),s("td",null,"Object of the message returned")],-1),R=n(`<p><code>Message</code>:</p><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td>string, undefined</td><td>Id of the message</td></tr><tr><td><code>role</code></td><td>user, assitant</td><td>The role of the assumed sender of the message. Will be <code>assistant</code> if replyWith is set to <code>message</code></td></tr><tr><td><code>content</code></td><td><code>Content</code>[]</td><td>List of contents returned by the call</td></tr></tbody></table><p><code>Content</code>:</p><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td>text</td><td>The type of the content. Expected to be text in this version</td></tr><tr><td><code>text</code></td><td>string</td><td>The actual message returned. Will be JSON string if <code>responseFormat</code> is set to JSON</td></tr></tbody></table><h3 id="example-response" tabindex="-1">Example Response <a class="header-anchor" href="#example-response" aria-label="Permalink to &quot;Example Response&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dsIW3JaX_J_LwwQ2pURlT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;threadId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;thread_6zY61bNiZX08Yt15MVolgaue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;messages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;msg_54vENtcnHHojV8sBL7HkB7ol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;role&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;assistant&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">value</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:23,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">celcius</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,6);function S(e,A,N,w,D,O){return h(),l("div",null,[r,p,s("h2",o,[t("Run "+a(e.$frontmatter.api_name)+" ",1),u]),k,s("p",null,"Runs an "+a(e.$frontmatter.api_name)+" passing it input and expecting an output",1),c,s("table",E,[g,s("tbody",null,[s("tr",null,[m,b,s("td",null,"The id of the "+a(e.$frontmatter.api_name)+" being used",1),y,_]),F,q,C])]),f,s("table",B,[x,s("tbody",null,[s("tr",null,[P,T,s("td",null,"The "+a(e.$frontmatter.api_name)+" id",1)]),v,I])]),R])}const j=i(d,[["render",S]]);export{$ as __pageData,j as default};
