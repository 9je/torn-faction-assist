// ==UserScript==
// @name         Faction Discord Assist Request
// @version      1.1
// @description  Adds a button that allows you to call for help by sending a ping to your faction's Discord
// @author       jjmoon [3176376]
// @namespace    https://raw.githubusercontent.com/9je/torn-faction-assist/
// @downloadURL  https://raw.githubusercontent.com/9je/torn-faction-assist/main/main.js 
// @updateURL    https://raw.githubusercontent.com/9je/torn-faction-assist/main/main.js
// @match        https://www.torn.com/loader.php?sid=attack*
// @grant        GM_xmlhttpRequest
// @connect      https://api.jjmoon.dev
// ==/UserScript==

// API key - Update with your own public API key
const API_KEY = "XXXXXXXXXXXXXXX";

!function(){"use strict";let e=document.createElement("div");e.style.margin="10px 20px 10px 0px",e.style.display="flex",e.style.alignItems="center",e.innerHTML=`
      <p style="margin-right: 10px; color: white;">Smokes:</p>
      <input id="reqSmokes" type="number" min="0" value="0" style="width: 40px; margin-right: 10px; background-color: #5f5f5f; color: white;"/>
      <p style="margin-right: 10px; color: white;">Tear gas:</p>
      <input id="reqGas" type="number" min="0" value="0" style="width: 40px; margin-right: 10px; background-color: #5f5f5f; color: white;"/>
      <button id="reqHelp" class="torn-btn btn___RxE8_ silver">Help!</button>
  `;let t=document.querySelector(".titleContainer___QrlWP");t&&t.appendChild(e);let r=document.getElementById("reqHelp");r.addEventListener("click",()=>{let e=document.getElementById("reqSmokes").value,t=document.getElementById("reqGas").value;document.querySelector("#playername_jjmoon").textContent;let r=window.location.href,n=new URL(r).searchParams.get("user2ID"),o=window.confirm(`Are you sure you want to send a ping to the Discord for ${e} smokes and ${t} tear gas?`);o&&GM_xmlhttpRequest({method:"POST",url:"https://api.jjmoon.dev/send",headers:{"Content-Type":"application/json"},data:JSON.stringify({smokes:e,tearGas:t,apikey:API_KEY,enemyId:n}),onload:function(e){console.log("Message sent successfully:",e.responseText)},onerror:function(e){console.error("Error sending message:",e)}})})}();