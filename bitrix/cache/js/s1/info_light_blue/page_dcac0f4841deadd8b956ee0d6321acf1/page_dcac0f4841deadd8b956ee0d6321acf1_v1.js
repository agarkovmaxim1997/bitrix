
; /* Start:"a:4:{s:4:"full";s:69:"/bitrix/components/bitrix/player/wmvplayer/wmvscript.js?1605208815188";s:6:"source";s:55:"/bitrix/components/bitrix/player/wmvplayer/wmvscript.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function showWMVPlayer(contID, JSConfig)
{
	var ply = new jeroenwijering.Player(document.getElementById(contID), '/bitrix/components/bitrix/player/wmvplayer/wmvplayer.xaml',  JSConfig);
}

/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/components/bitrix/player/wmvplayer/silverlight.js?160520881517327";s:6:"source";s:57:"/bitrix/components/bitrix/player/wmvplayer/silverlight.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
///////////////////////////////////////////////////////////////////////////////
//
//  Silverlight.js   			version 2.0.30523.6
//
//  This file is provided by Microsoft as a helper file for websites that
//  incorporate Silverlight Objects. This file is provided under the Microsoft
//  Public License available at 
//  http://code.msdn.microsoft.com/silverlightjs/Project/License.aspx.  
//  You may not use or distribute this file or the code in this file except as 
//  expressly permitted under that license.
// 
//  Copyright (c) Microsoft Corporation. All rights reserved.
//
///////////////////////////////////////////////////////////////////////////////

if (!window.Silverlight)
{
    window.Silverlight = { };
}

//////////////////////////////////////////////////////////////////
//
// _silverlightCount:
//
// Counter of globalized event handlers
//
//////////////////////////////////////////////////////////////////
Silverlight._silverlightCount = 0;

//////////////////////////////////////////////////////////////////
//
// fwlinkRoot:
//
// Prefix for fwlink URL's
//
//////////////////////////////////////////////////////////////////
Silverlight.fwlinkRoot='http://go2.microsoft.com/fwlink/?LinkID=';

//////////////////////////////////////////////////////////////////
//  
// onGetSilverlight:
//
// Called by Silverlight.GetSilverlight to notify the page that a user
// has requested the Silverlight installer
//
//////////////////////////////////////////////////////////////////
Silverlight.onGetSilverlight = null;

//////////////////////////////////////////////////////////////////
//
// onSilverlightInstalled:
//
// Called by Silverlight.WaitForInstallCompletion when the page detects
// that Silverlight has been installed. The event handler is not called
// in upgrade scenarios.
//
//////////////////////////////////////////////////////////////////
Silverlight.onSilverlightInstalled = function () {window.location.reload(false);};

//////////////////////////////////////////////////////////////////
//
// isInstalled:
//
// Checks to see if the correct version is installed
//
//////////////////////////////////////////////////////////////////
Silverlight.isInstalled = function(version)
{
    var isVersionSupported=false;
    var container = null;
    
    try 
    {
        var control = null;
        
        try 
        { 
            control = new ActiveXObject('AgControl.AgControl');
            if ( version == null )
            {
                isVersionSupported = true;
            }
            else if ( control.IsVersionSupported(version) )
            {
                isVersionSupported = true;
            }
            control = null;
        }
        catch (e)
        { 
            var plugin = navigator.plugins["Silverlight Plug-In"] ;
            if ( plugin )
            {
                if ( version === null )
                {
                    isVersionSupported = true;
                }
                else
                {
                    var actualVer = plugin.description;
                    if ( actualVer === "1.0.30226.2")
                        actualVer = "2.0.30226.2";
                    var actualVerArray =actualVer.split(".");
                    while ( actualVerArray.length > 3)
                    {
                        actualVerArray.pop();
                    }
                    while ( actualVerArray.length < 4)
                    {
                        actualVerArray.push(0);
                    }
                    var reqVerArray = version.split(".");
                    while ( reqVerArray.length > 4)
                    {
                        reqVerArray.pop();
                    }
                    
                    var requiredVersionPart ;
                    var actualVersionPart
                    var index = 0;
                    
                    
                    do
                    {
                        requiredVersionPart = parseInt(reqVerArray[index]);
                        actualVersionPart = parseInt(actualVerArray[index]);
                        index++;
                    }
                    while (index < reqVerArray.length && requiredVersionPart === actualVersionPart);
                    
                    if ( requiredVersionPart <= actualVersionPart && !isNaN(requiredVersionPart) )
                    {
                        isVersionSupported = true;
                    }
                }
            } 
        }
    }
    catch (e) 
    {
        isVersionSupported = false;
    }
    if (container) 
    {
        document.body.removeChild(container);
    }
    
    return isVersionSupported;
}
//////////////////////////////////////////////////////////////////
//
// WaitForInstallCompletion:
//
// Occasionally checks for Silverlight installation status. If it
// detects that Silverlight has been installed then it calls
// Silverlight.onSilverlightInstalled();. This is only supported
// if Silverlight was not previously installed on this computer.
//
//////////////////////////////////////////////////////////////////
Silverlight.WaitForInstallCompletion = function()
{
    if ( ! Silverlight.isBrowserRestartRequired && Silverlight.onSilverlightInstalled )
    {
        try
        {
            navigator.plugins.refresh();
        }
        catch(e)
        {
        }
        if ( Silverlight.isInstalled(null) )
        {
            Silverlight.onSilverlightInstalled();
        }
        else
        {
              setTimeout(Silverlight.WaitForInstallCompletion, 3000);
        }    
    }
}
//////////////////////////////////////////////////////////////////
//
// __startup:
//
// Performs startup tasks
//////////////////////////////////////////////////////////////////
Silverlight.__startup = function()
{
    Silverlight.isBrowserRestartRequired = Silverlight.isInstalled(null);
    if ( !Silverlight.isBrowserRestartRequired)
    {
        Silverlight.WaitForInstallCompletion();
    }
    if (window.removeEventListener) { 
       window.removeEventListener('load', Silverlight.__startup , false);
    }
    else { 
        window.detachEvent('onload', Silverlight.__startup );
    }
}

if (window.addEventListener) 
{
    window.addEventListener('load', Silverlight.__startup , false);
}
else 
{
    window.attachEvent('onload', Silverlight.__startup );
}

///////////////////////////////////////////////////////////////////////////////
// createObject:
//
// Inserts a Silverlight <object> tag or installation experience into the HTML
// DOM based on the current installed state of Silverlight. 
//
/////////////////////////////////////////////////////////////////////////////////

Silverlight.createObject = function(source, parentElement, id, properties, events, initParams, userContext)
{
    var slPluginHelper = new Object();
    var slProperties = properties;
    var slEvents = events;
    
    slPluginHelper.version = slProperties.version;
    slProperties.source = source;    
    slPluginHelper.alt = slProperties.alt;
    
    //rename properties to their tag property names. For bacwards compatibility
    //with Silverlight.js version 1.0
    if ( initParams )
        slProperties.initParams = initParams;
    if ( slProperties.isWindowless && !slProperties.windowless)
        slProperties.windowless = slProperties.isWindowless;
    if ( slProperties.framerate && !slProperties.maxFramerate)
        slProperties.maxFramerate = slProperties.framerate;
    if ( id && !slProperties.id)
        slProperties.id = id;
    
    // remove elements which are not to be added to the instantiation tag
    delete slProperties.ignoreBrowserVer;
    delete slProperties.inplaceInstallPrompt;
    delete slProperties.version;
    delete slProperties.isWindowless;
    delete slProperties.framerate;
    delete slProperties.data;
    delete slProperties.src;
    delete slProperties.alt;


    // detect that the correct version of Silverlight is installed, else display install

    if (Silverlight.isInstalled(slPluginHelper.version))
    {
        //move unknown events to the slProperties array
        for (var name in slEvents)
        {
            if ( slEvents[name])
            {
                if ( name == "onLoad" && typeof slEvents[name] == "function" && slEvents[name].length != 1 )
                {
                    var onLoadHandler = slEvents[name];
                    slEvents[name]=function (sender){ return onLoadHandler(document.getElementById(id), userContext, sender)};
                }
                var handlerName = Silverlight.__getHandlerName(slEvents[name]);
                if ( handlerName != null )
                {
                    slProperties[name] = handlerName;
                    slEvents[name] = null;
                }
                else
                {
                    throw "typeof events."+name+" must be 'function' or 'string'";
                }
            }
        }
        slPluginHTML = Silverlight.buildHTML(slProperties);
    }
    //The control could not be instantiated. Show the installation prompt
    else 
    {
        slPluginHTML = Silverlight.buildPromptHTML(slPluginHelper);
    }

    // insert or return the HTML
    if(parentElement)
    {
        parentElement.innerHTML = slPluginHTML;
    }
    else
    {
        return slPluginHTML;
    }

}

///////////////////////////////////////////////////////////////////////////////
//
//  buildHTML:
//
//  create HTML that instantiates the control
//
///////////////////////////////////////////////////////////////////////////////
Silverlight.buildHTML = function( slProperties)
{
    var htmlBuilder = [];

    htmlBuilder.push('<object type=\"application/x-silverlight\" data="data:application/x-silverlight,"');
    if ( slProperties.id != null )
    {
        htmlBuilder.push(' id="' + slProperties.id + '"');
    }
    if ( slProperties.width != null )
    {
        htmlBuilder.push(' width="' + slProperties.width+ '"');
    }
    if ( slProperties.height != null )
    {
        htmlBuilder.push(' height="' + slProperties.height + '"');
    }
    htmlBuilder.push(' >');
    
    delete slProperties.id;
    delete slProperties.width;
    delete slProperties.height;
    
    for (var name in slProperties)
    {
        if (slProperties[name])
        {
            htmlBuilder.push('<param name="'+Silverlight.HtmlAttributeEncode(name)+'" value="'+Silverlight.HtmlAttributeEncode(slProperties[name])+'" />');
        }
    }
    htmlBuilder.push('<\/object>');
    return htmlBuilder.join('');
}



//////////////////////////////////////////////////////////////////
//
// createObjectEx:
//
// takes a single parameter of all createObject 
// parameters enclosed in {}
//
//////////////////////////////////////////////////////////////////

Silverlight.createObjectEx = function(params)
{
    var parameters = params;
    var html = Silverlight.createObject(parameters.source, parameters.parentElement, parameters.id, parameters.properties, parameters.events, parameters.initParams, parameters.context);
    if (parameters.parentElement == null)
    {
        return html;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// buildPromptHTML
//
// Builds the HTML to prompt the user to download and install Silverlight
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.buildPromptHTML = function(slPluginHelper)
{
    var slPluginHTML = "";
    var urlRoot = Silverlight.fwlinkRoot;
    var shortVer = slPluginHelper.version ;
    if ( slPluginHelper.alt )
    {
        slPluginHTML = slPluginHelper.alt;
    }
    else
    {
        if (! shortVer )
        {
            shortVer="";
        }
        slPluginHTML = "<a href='javascript:Silverlight.getSilverlight(\"{1}\");' style='text-decoration: none;'><img src='{2}' alt='Get Microsoft Silverlight' style='border-style: none'/></a>";
        slPluginHTML = slPluginHTML.replace('{1}', shortVer );
        slPluginHTML = slPluginHTML.replace('{2}', urlRoot + '108181');
    }
    
    return slPluginHTML;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// getSilverlight:
//
// Navigates the browser to the appropriate Silverlight installer
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.getSilverlight = function(version)
{
    if (Silverlight.onGetSilverlight )
    {
        Silverlight.onGetSilverlight();
    }
    
    var shortVer = "";
    var reqVerArray = String(version).split(".");
    if (reqVerArray.length > 1)
    {
        var majorNum = parseInt(reqVerArray[0] );
        if ( isNaN(majorNum) || majorNum < 2 )
        {
            shortVer = "1.0";
        }
        else
        {
            shortVer = reqVerArray[0]+'.'+reqVerArray[1];
        }
    }
    
    var verArg = "";
    
    if (shortVer.match(/^\d+\056\d+$/) )
    {
        verArg = "&v="+shortVer;
    }
    
    Silverlight.followFWLink("114576" + verArg);
}


///////////////////////////////////////////////////////////////////////////////////////////////
//
// followFWLink:
//
// Navigates to a url based on fwlinkid
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.followFWLink = function(linkid)
{
    top.location=Silverlight.fwlinkRoot+String(linkid);
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// HtmlAttributeEncode:
//
// Encodes special characters in input strings as charcodes
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.HtmlAttributeEncode = function( strInput )
{
      var c;
      var retVal = '';

    if(strInput == null)
      {
          return null;
    }
      
      for(var cnt = 0; cnt < strInput.length; cnt++)
      {
            c = strInput.charCodeAt(cnt);

            if (( ( c > 96 ) && ( c < 123 ) ) ||
                  ( ( c > 64 ) && ( c < 91 ) ) ||
                  ( ( c > 43 ) && ( c < 58 ) && (c!=47)) ||
                  ( c == 95 ))
            {
                  retVal = retVal + String.fromCharCode(c);
            }
            else
            {
                  retVal = retVal + '&#' + c + ';';
            }
      }
      
      return retVal;
}
///////////////////////////////////////////////////////////////////////////////
//
//  default_error_handler:
//
//  Default error handling function 
//
///////////////////////////////////////////////////////////////////////////////

Silverlight.default_error_handler = function (sender, args)
{
    var iErrorCode;
    var errorType = args.ErrorType;

    iErrorCode = args.ErrorCode;

    var errMsg = "\nSilverlight error message     \n" ;

    errMsg += "ErrorCode: "+ iErrorCode + "\n";


    errMsg += "ErrorType: " + errorType + "       \n";
    errMsg += "Message: " + args.ErrorMessage + "     \n";

    if (errorType == "ParserError")
    {
        errMsg += "XamlFile: " + args.xamlFile + "     \n";
        errMsg += "Line: " + args.lineNumber + "     \n";
        errMsg += "Position: " + args.charPosition + "     \n";
    }
    else if (errorType == "RuntimeError")
    {
        if (args.lineNumber != 0)
        {
            errMsg += "Line: " + args.lineNumber + "     \n";
            errMsg += "Position: " +  args.charPosition + "     \n";
        }
        errMsg += "MethodName: " + args.methodName + "     \n";
    }
    alert (errMsg);
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// __cleanup:
//
// Releases event handler resources when the page is unloaded
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.__cleanup = function ()
{
    for (var i = Silverlight._silverlightCount - 1; i >= 0; i--) {
        window['__slEvent' + i] = null;
    }
    Silverlight._silverlightCount = 0;
    if (window.removeEventListener) { 
       window.removeEventListener('unload', Silverlight.__cleanup , false);
    }
    else { 
        window.detachEvent('onunload', Silverlight.__cleanup );
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// __getHandlerName:
//
// Generates named event handlers for delegates.
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.__getHandlerName = function (handler)
{
    var handlerName = "";
    if ( typeof handler == "string")
    {
        handlerName = handler;
    }
    else if ( typeof handler == "function" )
    {
        if (Silverlight._silverlightCount == 0)
        {
            if (window.addEventListener) 
            {
                window.addEventListener('onunload', Silverlight.__cleanup , false);
            }
            else 
            {
                window.attachEvent('onunload', Silverlight.__cleanup );
            }
        }
        var count = Silverlight._silverlightCount++;
        handlerName = "__slEvent"+count;
        
        window[handlerName]=handler;
    }
    else
    {
        handlerName = null;
    }
    return handlerName;
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/components/bitrix/player/wmvplayer/wmvplayer.js?160520881524361";s:6:"source";s:55:"/bitrix/components/bitrix/player/wmvplayer/wmvplayer.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/****************************************************************************
* JW WMV Player version 1.1, created with M$ Silverlight 1.0
*
* This file contains all logic for the JW WMV Player. For a functional setup,
* the following two files are also needed:
* - silverlight.js (for instantiating the silverlight plugin)
* - wmvplayer.xaml (or another XAML skin describing the player graphics)
*
* More info: http://www.jeroenwijering.com/?item=JW_WMV_Player
****************************************************************************/
if(typeof jeroenwijering == "undefined") {
	var jeroenwijering = new Object();
	jeroenwijering.utils = new Object();
}










/****************************************************************************
* The player wrapper; loads config variables and starts MVC cycle.
****************************************************************************/
jeroenwijering.Player = function(cnt,src,cfg) {
	this.controller;
	this.model;
	this.view;
	this.configuration = {
		backgroundcolor:'FFFFFF',
		windowless:'false',
		file:'',
		height:'260',
		image:'',
		backcolor:'FFFFFF',
		frontcolor:'000000',
		lightcolor:'000000',
		screencolor:'000000',
		width:'320',
		logo:'',
		overstretch:'false',
		shownavigation:'true',
		showstop:'false',
		showdigits:'true',
		usefullscreen:'true',
		usemute:'false',
		autostart:'false',
		bufferlength:'3',
		duration:'0',
		repeat:'false',
		sender:'',
		start:'0',
		volume:'90',
		link:'',
		linkfromdisplay:'false',
		linktarget:'_self'
	};
	for(itm in this.configuration) {
		if(cfg[itm] != undefined) {
			if (itm.indexOf('color') > 0) {
				this.configuration[itm] = cfg[itm].substr(cfg[itm].length-6);
			} else {
				this.configuration[itm] = cfg[itm];
			}
		}
	}
	Silverlight.createObjectEx({
		source:src,
		parentElement:cnt,
		properties:{
			width:this.configuration['width'],
			height:this.configuration['height'],
			version:'1.0',
			inplaceInstallPrompt:true,
			isWindowless:this.configuration['windowless'],
			background:'#'+this.configuration['backgroundcolor']
		},
		events:{
			onLoad:this.onLoadHandler,
			onError:null
		},
		context:this
	});
}

jeroenwijering.Player.prototype = {
	addListener: function(typ,fcn) {
		this.view.listeners.push({type:typ,func:fcn});
	},

	getConfig: function() {
		return this.configuration;
	},

	onLoadHandler: function(pid,tgt,sdr) {
		tgt.configuration['sender'] = sdr;
		tgt.controller = new jeroenwijering.Controller(tgt.configuration);
		tgt.view = new jeroenwijering.View(tgt.configuration,tgt.controller);
		tgt.model = new jeroenwijering.Model(tgt.configuration,tgt.controller,tgt.view);
		tgt.controller.startMVC(tgt.view,tgt.model);
	},

	sendEvent: function(typ,prm) {
		switch(typ.toUpperCase()) {
			case 'LINK':
				this.controller.setLink();
				break;
			case 'LOAD':
				this.controller.setLoad(prm);
				break;
			case 'MUTE':
				this.controller.setMute();
				break;
			case 'PLAY':
				this.controller.setPlay();
				break;
			case 'SCRUB':
				this.controller.setScrub(prm);
				break;
			case 'STOP':
				this.controller.setStop();
				break;
			case 'VOLUME':
				this.controller.setVolume(prm);
				break;
		}
	}
}










/****************************************************************************
* The controller of the player MVC triad, which processes all user input.
****************************************************************************/
jeroenwijering.Controller = function(cfg) {
	this.configuration = cfg;
}

jeroenwijering.Controller.prototype = {
	startMVC: function(vie,mdl) {
		this.view = vie;
		this.model = mdl;
		if(this.configuration['usemute'] == 'true') {
			this.view.onVolume(0);
			this.view.onMute(true);
			this.model.goVolume(0);
		} else {
			this.view.onVolume(this.configuration['volume']);
			this.model.goVolume(this.configuration['volume']);
		}
		if(this.configuration['autostart'] == 'true') {
			this.model.goStart();
		} else {
			this.model.goPause();
		}
	},

	setState: function(old,stt) {
		this.state = stt;
		var pos = this.configuration['start'];
		if(old == 'Closed' && pos > 0) {
			setTimeout(jeroenwijering.utils.delegate(this,this.setScrub),200,pos);
		}
	},

	setLink: function() {
		if (this.configuration['linktarget'].indexOf('javascript:') == 0) {
			return Function(this.configuration['linktarget']).apply();
		} else if (this.configuration['linktarget'] == '_blank') {
			window.open(this.configuration['link']);
		} else if (this.configuration['linktarget'] != '') {
			window.location = this.configuration['link'];
		}
	},

	setLoad: function(fil) {
		if(this.model.state != "Closed") {
			this.model.goStop();
		}
		this.configuration['file'] = fil;
		if(this.configuration['autostart'] == 'true') {
			setTimeout(jeroenwijering.utils.delegate(this.model,this.model.goStart),100);
		}
	},

	setMute: function() {
		if(this.configuration['usemute'] == 'true') {
			this.configuration['usemute'] = 'false';
			this.model.goVolume(this.configuration['volume']);
			this.view.onMute(false);
		} else {
			this.configuration['usemute'] = 'true';
			this.model.goVolume(0);
			this.view.onMute(true);
		}
	},

	setPlay: function() {
		if(this.state == 'Buffering' || this.state == 'Playing') {
			if(this.configuration['duration'] == 0) {
				this.model.goStop();
			} else {
				this.model.goPause();
			}
		} else {
			this.model.goStart();
		}
	},

	setScrub: function(sec) {
		if(sec < 2) {
			sec = 0;
		} else if (sec > this.configuration['duration']-4) {
			sec = this.configuration['duration']-4;
		}
		if(this.state == 'Buffering' || this.state == 'Playing') {
			this.model.goStart(sec);
		} else {
			this.model.goPause(sec);
		}
	},

	setStop: function() {
		this.model.goStop();
	},

	setVolume: function(pct) {
		if(pct < 0) { pct = 0; } else if(pct > 100) { pct = 100; }
		this.configuration['volume'] = Math.round(pct);
		this.model.goVolume(pct);
		this.view.onVolume(pct);
		if(this.configuration['usemute'] == 'true') {
			this.configuration['usemute'] = 'false';
			this.view.onMute(false);
		}
	},

	setFullscreen: function() {
		var fss = !this.configuration['sender'].getHost().content.FullScreen;
		this.configuration['sender'].getHost().content.FullScreen = fss;
		jeroenwijering.utils.delegate(this.view,this.view.onFullscreen);
	}
}










/****************************************************************************
* The view of the player MVC triad, which manages the graphics.
****************************************************************************/
jeroenwijering.View = function(cfg,ctr) {
	this.configuration = cfg;
	this.listeners = Array();
	this.controller = ctr;
	this.fstimeout;
	this.fslistener;
	this.display = this.configuration['sender'].findName("PlayerDisplay");
	this.controlbar = this.configuration['sender'].findName("PlayerControls");
	this.configuration['sender'].getHost().content.onResize =
		jeroenwijering.utils.delegate(this,this.resizePlayer);
	this.configuration['sender'].getHost().content.onFullScreenChange =
		jeroenwijering.utils.delegate(this,this.onFullscreen);
	this.assignColorsClicks();
	this.resizePlayer();
}

jeroenwijering.View.prototype = {
	onBuffer: function(pct) {
		var snd = this.configuration['sender'];
		if(pct == 0) {
			snd.findName("BufferText").Text = null;
		} else {
			pct < 10 ? pct = "0"+pct: pct = ""+pct;
			snd.findName("BufferText").Text = pct;
		}
		this.delegate('BUFFER',[pct]);
	},

	onFullscreen: function(fss) {
		var snd = this.configuration['sender'];
		var fst = snd.getHost().content.FullScreen;
		if(fst) {
			this.fstimeout = setTimeout(jeroenwijering.utils.delegate(this,
				this.hideFSControls),2000);
			this.fslistener = this.display.addEventListener('MouseMove',
				jeroenwijering.utils.delegate(this,this.showFSControls));
			snd.findName("FullscreenSymbol").Visibility = "Collapsed";
			snd.findName("FullscreenOffSymbol").Visibility = "Visible";
		} else {
			clearTimeout(this.fstimeout);
			this.display.removeEventListener("MouseMove",this.fslistener);
			this.controlbar.Visibility = "Visible";
			this.display.Cursor = "Hand";
			snd.findName("FullscreenSymbol").Visibility = "Visible";
			snd.findName("FullscreenOffSymbol").Visibility = "Collapsed";
		}
		this.resizePlayer();
		this.delegate('FULLSCREEN');
	},

	showFSControls: function(sdr,arg) {
		var vbt = sdr.findName('PlayerControls');
		var yps = arg.GetPosition(vbt).Y;
		clearTimeout(this.fstimeout);
		this.controlbar.Visibility = "Visible";
		this.display.Cursor = "Hand";
		if(yps < 0) {
			this.fstimeout = setTimeout(jeroenwijering.utils.delegate(this,
				this.hideFSControls),2000);
		}
	},

	hideFSControls: function() {
		this.controlbar.Visibility = "Collapsed";
		this.display.Cursor = "None";
	},

	onLoad: function(pct) {
		var snd = this.configuration['sender'];
		var max = snd.findName("TimeSlider").Width;
		snd.findName("DownloadProgress").Width = Math.round(max*pct/100);
		this.delegate('LOAD',[pct]);
	},

	onMute: function(mut) {
		var snd = this.configuration['sender'];
		this.configuration['usemute'] = ''+mut;
		if(mut) {
			snd.findName("VolumeHighlight").Visibility = "Collapsed";
			snd.findName("MuteSymbol").Visibility = "Visible";
			snd.findName("MuteOffSymbol").Visibility = "Collapsed";
			if(this.state == 'Playing') {
				snd.findName("MuteIcon").Visibility = "Visible";
			}
		} else {
			snd.findName("VolumeHighlight").Visibility = "Visible";
			snd.findName("MuteSymbol").Visibility = "Collapsed";
			snd.findName("MuteOffSymbol").Visibility = "Visible";
			snd.findName("MuteIcon").Visibility = "Collapsed";
		}
		this.delegate('MUTE');
	},

	onState: function(old,stt) {
		var snd = this.configuration['sender'];
		this.state = stt;
		if(stt == 'Buffering' || stt == 'Playing' || stt == 'Opening') {
			snd.findName("PlayIcon").Visibility = "Collapsed";
			snd.findName("PlaySymbol").Visibility = "Collapsed";
			snd.findName("PlayOffSymbol").Visibility = "Visible";
			if (stt=='Playing') {
				snd.findName("BufferIcon").Visibility = "Collapsed";
				snd.findName("BufferText").Visibility = "Collapsed";
				if(this.configuration['usemute'] == 'true') {
					snd.findName("MuteIcon").Visibility = "Visible";
				}
			} else{
				snd.findName("BufferIcon").Visibility = "Visible";
				snd.findName("BufferText").Visibility = "Visible";
			}
		} else {
			snd.findName("MuteIcon").Visibility = "Collapsed";
			snd.findName("BufferIcon").Visibility = "Collapsed";
			snd.findName("BufferText").Visibility = "Collapsed";
			snd.findName("PlayOffSymbol").Visibility = "Collapsed";
			snd.findName("PlaySymbol").Visibility = "Visible";
			if(this.configuration['linkfromdisplay'] == 'true') {
				snd.findName("PlayIcon").Visibility = "Collapsed";
			} else {
				snd.findName("PlayIcon").Visibility = "Visible";
			}
		}
		try {
			if(!(old == 'Completed' && stt == 'Buffering') &&
				!(old == 'Buffering' && stt == 'Paused')) {
				playerStatusChange(old.toUpperCase(),stt.toUpperCase());
			}
		} catch (err) {}
		this.delegate('STATE',[old,stt]);
	},

	onTime: function(elp,dur) {
		var snd = this.configuration['sender'];
		var snd = this.configuration['sender'];
		var max = snd.findName("TimeSlider").Width;
		if(dur > 0) {
			var pos = Math.round(max*elp/dur);
			this.configuration['duration'] = dur;
			snd.findName("ElapsedText").Text = jeroenwijering.utils.timestring(elp);
			snd.findName("RemainingText").Text = jeroenwijering.utils.timestring(dur-elp);
			snd.findName("TimeSymbol").Visibility = "Visible";
			snd.findName("TimeSymbol")['Canvas.Left'] = pos+4;
			snd.findName("TimeHighlight").Width = pos-2;
		} else  {
			snd.findName("TimeSymbol").Visibility = "Collapsed";
		}
		this.delegate('TIME',[elp,dur]);
	},

	onVolume: function(pct) {
		var snd = this.configuration['sender'];
		snd.findName("VolumeHighlight").Width = Math.round(pct/5);
		this.delegate('VOLUME',[pct]);
	},

	assignColorsClicks: function() {
		this.display.Cursor = "Hand";
		this.display.Background = "#FF"+this.configuration['screencolor'];
		if(this.configuration['linkfromdisplay'] == 'false') {
			this.display.addEventListener('MouseLeftButtonUp',
				jeroenwijering.utils.delegate(this.controller,
				this.controller.setPlay));
		} else {
			this.display.addEventListener('MouseLeftButtonUp',
				jeroenwijering.utils.delegate(this.controller,
				this.controller.setLink));
			this.display.findName("PlayIcon").Visibility = "Collapsed";
		}
		if(this.configuration['logo'] != '') {
			this.display.findName('OverlayCanvas').Visibility = "Visible";
			this.display.findName('OverlayLogo').ImageSource =
				this.configuration['logo'];
		}
		this.controlbar.findName("ControlbarBack").Fill =
			"#FF"+this.configuration['backcolor'];
		this.assignButton('Play',this.controller.setPlay);
		this.assignButton('Stop',this.controller.setStop);
		this.configuration['sender'].findName('ElapsedText').Foreground =
			"#FF"+this.configuration['frontcolor'];
		this.assignSlider('Time',this.changeTime);
		this.configuration['sender'].findName('DownloadProgress').Fill =
			"#FF"+this.configuration['frontcolor'];
		this.configuration['sender'].findName('RemainingText').Foreground =
			"#FF"+this.configuration['frontcolor'];
		this.assignButton('Link',this.controller.setLink);
		this.assignButton('Fullscreen',this.controller.setFullscreen);
		this.assignButton('Mute',this.controller.setMute);
		this.assignSlider('Volume',this.changeVolume);
	},

	assignButton: function(btn,act) {
		var el1 = this.configuration['sender'].findName(btn+'Button');
		el1.Cursor = "Hand";
		el1.addEventListener('MouseLeftButtonUp',
			jeroenwijering.utils.delegate(this.controller,act));
		el1.addEventListener('MouseEnter',
			jeroenwijering.utils.delegate(this,this.rollOver));
		el1.addEventListener('MouseLeave',
			jeroenwijering.utils.delegate(this,this.rollOut));
		this.configuration['sender'].findName(btn+'Symbol').Fill =
			"#FF"+this.configuration['frontcolor'];
		try {
			this.configuration['sender'].findName(btn+'OffSymbol').Fill =
				"#FF"+this.configuration['frontcolor'];
		} catch(e) {}
	},

	assignSlider: function(sld,act) {
		var el1 = this.configuration['sender'].findName(sld+'Button');
		el1.Cursor = "Hand";
		el1.addEventListener('MouseLeftButtonUp',
			jeroenwijering.utils.delegate(this,act));
		el1.addEventListener('MouseEnter',
			jeroenwijering.utils.delegate(this,this.rollOver));
		el1.addEventListener('MouseLeave',
			jeroenwijering.utils.delegate(this,this.rollOut));
		this.configuration['sender'].findName(sld+'Slider').Fill =
			"#FF"+this.configuration['frontcolor'];
		this.configuration['sender'].findName(sld+'Highlight').Fill =
			"#FF"+this.configuration['frontcolor'];
		this.configuration['sender'].findName(sld+'Symbol').Fill =
			"#FF"+this.configuration['frontcolor'];
	},

	delegate: function(typ,arg) {
		for(var i=0; i<this.listeners.length; i++) {
			if(this.listeners[i]['type'].toUpperCase() == typ) {
				this.listeners[i]['func'].apply(null,arg);
			}
		}
	},

	rollOver: function(sdr) {
		var str = sdr.Name.substr(0,sdr.Name.length-6);
		this.configuration['sender'].findName(str+'Symbol').Fill =
			"#FF"+this.configuration['lightcolor'];
		try {
			this.configuration['sender'].findName(str+'OffSymbol').Fill =
				"#FF"+this.configuration['lightcolor'];
		} catch(e) {}
	},

	rollOut: function(sdr) {
		var str = sdr.Name.substr(0,sdr.Name.length-6);
		this.configuration['sender'].findName(str+'Symbol').Fill =
			"#FF"+this.configuration['frontcolor'];
		try {
			this.configuration['sender'].findName(str+'OffSymbol').Fill =
				"#FF"+this.configuration['frontcolor'];
		} catch(e) {}
	},

	changeTime: function(sdr,arg) {
		var tbt = sdr.findName('TimeSlider');
		var xps = arg.GetPosition(tbt).X;
		var sec = Math.floor(xps/tbt.Width*this.configuration['duration']);
		this.controller.setScrub(sec);
	},

	changeVolume: function(sdr,arg) {
		var vbt = sdr.findName('VolumeButton');
		var xps = arg.GetPosition(vbt).X;
		this.controller.setVolume(xps*5);
	},

	resizePlayer: function() {
		var wid = this.configuration['sender'].getHost().content.actualWidth;
		var hei = this.configuration['sender'].getHost().content.actualHeight;
		var fss = this.configuration['sender'].getHost().content.FullScreen;
		if(this.configuration['shownavigation'] == 'true') {
			if(fss == true) {
				this.resizeDisplay(wid,hei);
				this.controlbar['Canvas.Left'] = Math.round(wid/2-250);
				this.resizeControlbar(500,hei-this.controlbar.Height-16);
				this.controlbar.findName('ControlbarBack')['Opacity'] = 0.5;
			} else {
				this.resizeDisplay(wid,hei-20);
				this.controlbar['Canvas.Left'] = 0;
				this.resizeControlbar(wid,hei-this.controlbar.Height);
				this.controlbar.findName('ControlbarBack')['Opacity'] = 1;
			}
		} else {
			this.resizeDisplay(wid,hei);
		}
	},

	resizeDisplay: function(wid,hei) {
		this.stretchElement('PlayerDisplay',wid,hei);
		this.stretchElement('VideoWindow',wid,hei);
		this.stretchElement('PlaceholderImage',wid,hei);
		this.centerElement('PlayIcon',wid,hei);
		this.centerElement('MuteIcon',wid,hei);
		this.centerElement('BufferIcon',wid,hei);
		this.centerElement('BufferText',wid,hei);
		this.display.findName('OverlayCanvas')['Canvas.Left'] = wid -
			this.display.findName('OverlayCanvas').Width - 10;
		this.display.Visibility = "Visible";
	},

	resizeControlbar: function(wid,yps,alp) {
		this.controlbar['Canvas.Top'] = yps;
		this.stretchElement('PlayerControls',wid);
		this.stretchElement('ControlbarBack',wid);
		this.placeElement('PlayButton',0);
		var lft = 17;
		this.placeElement('VolumeButton',wid-24);
		this.placeElement('MuteButton',wid-37);
		var rgt = 37;
		if(this.configuration['showstop'] == 'true') {
			this.placeElement('StopButton',lft);
			lft += 17;
		} else {
			this.controlbar.findName('StopButton').Visibility="Collapsed";
		}
		if(this.configuration['usefullscreen'] == 'true') {
			rgt += 18;
			this.placeElement('FullscreenButton',wid-rgt);
		} else {
			this.controlbar.findName('FullscreenButton').Visibility =
				"Collapsed";
		}
		if(this.configuration['link'] != '') {
			rgt += 18;
			this.placeElement('LinkButton',wid-rgt);
		} else {
			this.controlbar.findName('LinkButton').Visibility="Collapsed";
		}
		if(this.configuration['showdigits'] == 'true' && wid-rgt-lft> 160) {
			rgt += 35;
			this.controlbar.findName('RemainingButton').Visibility="Visible";
			this.controlbar.findName('ElapsedButton').Visibility="Visible";
			this.placeElement('RemainingButton',wid-rgt);
			this.placeElement('ElapsedButton',lft);
			lft +=35;
		} else {
			this.controlbar.findName('RemainingButton').Visibility =
				"Collapsed";
			this.controlbar.findName('ElapsedButton').Visibility="Collapsed";
		}
		this.placeElement('TimeButton',lft);
		this.stretchElement('TimeButton',wid-lft-rgt);
		this.stretchElement('TimeShadow',wid-lft-rgt);
		this.stretchElement('TimeStroke',wid-lft-rgt);
		this.stretchElement('TimeFill',wid-lft-rgt);
		this.stretchElement('TimeSlider',wid-lft-rgt-10);
		this.stretchElement('DownloadProgress',wid-lft-rgt-10);
		var tsb = this.configuration['sender'].findName('TimeSymbol');
		this.stretchElement('TimeHighlight',tsb['Canvas.Left']-5);
		this.controlbar.Visibility = "Visible";
	},

	centerElement: function(nam,wid,hei) {
		var elm = this.configuration['sender'].findName(nam);
		elm['Canvas.Left'] = Math.round(wid/2 - elm.Width/2);
		elm['Canvas.Top'] = Math.round(hei/2 - elm.Height/2);
	},

	stretchElement: function(nam,wid,hei) {
		var elm = this.configuration['sender'].findName(nam);
		elm.Width = wid;
		if (hei != undefined) { elm.Height = hei; }
	},

	placeElement: function(nam,xps,yps) {
		var elm = this.configuration['sender'].findName(nam);
		elm['Canvas.Left'] = xps;
		if(yps) { elm['Canvas.Top'] = yps; }
	}
}










/****************************************************************************
* The model of the player MVC triad, which stores all playback logic.
****************************************************************************/
jeroenwijering.Model = function(cfg,ctr,vie) {
	this.configuration = cfg;
	this.controller = ctr;
	this.view = vie;
	this.video = this.configuration['sender'].findName("VideoWindow");
	this.preview = this.configuration['sender'].findName("PlaceholderImage");
	var str = {
		'true':'UniformToFill',
		'false':'Uniform',
		'fit':'Fill',
		'none':'None'
	}
	this.state = this.video.CurrentState;
	this.timeint = [];
	this.video.Stretch = str[this.configuration['overstretch']];
	this.preview.Stretch = str[this.configuration['overstretch']];
	this.video.BufferingTime =
		jeroenwijering.utils.spanstring(this.configuration['bufferlength']);
	this.video.AutoPlay = true;
	this.video.AddEventListener("CurrentStateChanged",
		jeroenwijering.utils.delegate(this,this.stateChanged));
	this.video.AddEventListener("MediaEnded",
		jeroenwijering.utils.delegate(this,this.mediaEnded));
	this.video.AddEventListener("BufferingProgressChanged",
		jeroenwijering.utils.delegate(this,this.bufferChanged));
	this.video.AddEventListener("DownloadProgressChanged",
		jeroenwijering.utils.delegate(this,this.downloadChanged));
	if(this.configuration['image'] != '') {
		this.preview.Source = this.configuration['image'];
	}
}

jeroenwijering.Model.prototype = {
	goPause: function(sec) {
		this.video.pause();
		if(!isNaN(sec)) {
			this.video.Position = jeroenwijering.utils.spanstring(sec);
		}
		this.timeChanged();
	},

	goStart: function(sec) {
		this.video.Visibility = 'Visible';
		this.preview.Visibility = 'Collapsed';
		if(this.video.CurrentState == "Closed") {
			this.video.Source = this.configuration['file'];
		} else {
			this.video.play();
		}
		if(!isNaN(sec)) {
			this.video.Position = jeroenwijering.utils.spanstring(sec);
		}
	},

	goStop: function() {
		this.video.Visibility = 'Collapsed';
		this.preview.Visibility = 'Visible';
		this.goPause(0);
		this.video.Source = null;
		this.view.onBuffer(0);

		// BITRIX FIX
		for(var i=0, l = this.timeint.length; i < l; i++)
			clearInterval(this.timeint[i]);

		this.timeint = [];
	},

	goVolume: function(pct) {
		this.video.Volume = pct/100;
	},

	stateChanged: function() {
		var stt = this.video.CurrentState;
		if(stt != this.state) {
			this.controller.setState(this.state,stt);
			this.view.onState(this.state,stt);
			this.state = stt;
			this.configuration['duration'] =
				Math.round(this.video.NaturalDuration.Seconds*10)/10;
			if(stt != "Playing" && stt != "Buffering" && stt != "Opening") {
				// BITRIX FIX
				for(var i=0, l = this.timeint.length; i < l; i++)
					clearInterval(this.timeint[i]);
				this.timeint = [];
			} else {
				// BITRIX FIX
				this.timeint.push(setInterval(jeroenwijering.utils.delegate(this, this.timeChanged), 1000));
			}
		}
	},

	mediaEnded: function() {
		if(this.configuration['repeat'] == 'true') {
			this.goStart(0);
		} else {
			this.state = 'Completed';
			this.view.onState(this.state,'Completed');
			this.video.Visibility = 'Collapsed';
			this.preview.Visibility = 'Visible';
			this.goPause(0);
		}
	},

	bufferChanged: function() {
		var bfr = Math.round(this.video.BufferingProgress*100);
		this.view.onBuffer(bfr);
	},

	downloadChanged: function() {
		var dld = Math.round(this.video.DownloadProgress*100);
		this.view.onLoad(dld);
	},

	timeChanged: function() {
		// BITRIX FIX
		try {
			var pos = Math.round(this.video.Position.Seconds*10)/10;
			this.view.onTime(pos,this.configuration['duration']);
		}
		catch(e)
		{
			for(var i=0, l = this.timeint.length; i < l; i++)
				clearInterval(this.timeint[i]);
			this.timeint = [];
		}
	}
}










/****************************************************************************
* Some utility functions.
****************************************************************************/
jeroenwijering.utils.delegate = function(obj,fcn) {
	return function() {
		return fcn.apply(obj,arguments);
	}
}
jeroenwijering.utils.timestring = function(stp) {
	var hrs = Math.floor(stp/3600);
	var min = Math.floor(stp%3600/60);
	var sec = Math.round(stp%60);
	var str = "";
	sec > 9 ? str += sec: str +='0'+sec;
	min > 9 ? str = min+":"+str: str='0'+min+":"+str;
	hrs > 0 ? str = hrs+":"+str: null;
	return str;
}
jeroenwijering.utils.spanstring = function(stp) {
	var hrs = Math.floor(stp/3600);
	var min = Math.floor(stp%3600/60);
	var sec = Math.round(stp%60*10)/10;
	var str = hrs+':'+min+':'+sec;
	return str;
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/bitrix/components/bitrix/player/mediaplayer/flvscript.js?1605208808654";s:6:"source";s:57:"/bitrix/components/bitrix/player/mediaplayer/flvscript.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function getFlashVersion()
{
	var v = 0;
	var n = navigator;
	if (n.platform == 'Win32' && n.userAgent.indexOf('Opera') == (-1) && window.ActiveXObject)
	{
		for (var i = 9; i > 2; i--)
			if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i))
				return i;
	}
	else if(n.plugins)
	{
		for (var i = 0, l = n.plugins.length; i < l; i++)
			if (n.plugins[i].name.indexOf('Flash') != -1)
				v = parseInt(n.plugins[i].description.substr(16, 2));
	}
	return v;
}

function showFLVPlayer(id, mess)
{
	var oDiv = document.getElementById(id + '_div');
	if (oDiv)
	{
		oDiv.style.display = 'block';
		if (getFlashVersion() < 9)
			oDiv.innerHTML = mess;
	}
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:83:"/bitrix/components/bitrix/main.share/templates/.default/script.min.js?1605208751468";s:6:"source";s:65:"/bitrix/components/bitrix/main.share/templates/.default/script.js";s:3:"min";s:69:"/bitrix/components/bitrix/main.share/templates/.default/script.min.js";s:3:"map";s:69:"/bitrix/components/bitrix/main.share/templates/.default/script.map.js";}"*/
function ShowShareDialog(e){var n=document.getElementById("share-dialog"+e);if(!n)return;if(n.style.display=="block"){n.style.display="none"}else{n.style.display="block"}return false}function CloseShareDialog(e){var n=document.getElementById("share-dialog"+e);if(!n)return;n.style.display="none";return false}function __function_exists(e){if(typeof e=="string"){return typeof window[e]=="function"}else{return e instanceof Function}}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:89:"/bitrix/components/bitrix/main.post.form/templates/.default/script.min.js?160520874960736";s:6:"source";s:69:"/bitrix/components/bitrix/main.post.form/templates/.default/script.js";s:3:"min";s:73:"/bitrix/components/bitrix/main.post.form/templates/.default/script.min.js";s:3:"map";s:73:"/bitrix/components/bitrix/main.post.form/templates/.default/script.map.js";}"*/
(function(){if(window["LHEPostForm"])return;var e={controller:{},handler:{},form:{}};BX.addCustomEvent(window,"BFileDLoadFormControllerWasBound",function(t){e.controller[t.id]=true});BX.addCustomEvent(window,"WDLoadFormControllerInit",function(t){e.controller[t.CID]=t});BX.addCustomEvent(window,"WDLoadFormControllerWasBound",function(t){e.controller[t.CID]=true});BX.addCustomEvent(window,"DiskDLoadFormControllerInit",function(t){e.controller[t.CID]=t});BX.addCustomEvent(window,"DiskLoadFormControllerWasBound",function(t){e.controller[t.CID]=true});BX.addCustomEvent(window,"OnEditorInitedBefore",function(t){if(e.handler[t.id]){t.__lhe_flags=["OnEditorInitedBefore"];if(e.handler[t.id]["params"]&&e.handler[t.id]["params"]["LHEJsObjName"])window[e.handler[t.id].params["LHEJsObjName"]]=t;e.handler[t.id].OnEditorInitedBefore(t)}});var t=function(t){if(e.handler[t.id]&&e.handler[t.id].editorIsLoaded!==true){e.handler[t.id].editorIsLoaded=true;e.handler[t.id].exec();BX.onCustomEvent(e.handler[t.id],"OnEditorIsLoaded",[e.handler[t.id],t])}};BX.addCustomEvent(window,"OnCreateIframeAfter",t);BX.addCustomEvent(window,"OnEditorInitedAfter",function(i,n){if(e.handler[i.id]){i.__lhe_flags.push("OnEditorInitedAfter");e.handler[i.id].OnEditorInitedAfter(i);if(e.handler[i.id].editorIsLoaded!==true&&n&&i.sandbox&&i.sandbox.inited)t.apply(i,[i])}});BX.util.object_search=function(e,t){for(var i in t){if(t.hasOwnProperty(i)){if(t[i]==e)return true;else if(typeof t[i]=="object"&&t[i]!==null){var n=BX.util.object_search_key(e,t[i]);if(n!==false)return n}}}return false};var i=function(e,t,i){i=i&&i.length>0?i:[];if(typeof t=="object"&&t.length>0){var n;while((n=t.pop())&&n&&t.length>0){i.push(n)}t=n}i.push(t);this.exist=true;this.bxTag=e;this.tag=t;this.tags=i;this.regexp=new RegExp("\\[("+i.join("|")+")=((?:\\s|\\S)*?)(?:\\s*?WIDTH=(\\d+)\\s*?HEIGHT=(\\d+))?\\]","ig");this.code="["+t+"=#ID##ADDITIONAL#]";this.wysiwyg='<span style="color: #2067B0; border-bottom: 1px dashed #2067B0; margin:0 2px;" id="#ID#"#ADDITIONAL#>#NAME#</span>'},n=function(t,i,n){this.CID=this.id=i;this.parser=t.parser["disk_file"]||null;this.params=n;this.node=BX("diskuf-selectdialog-"+i);this.handler=e.controller[i];this.manager=t;this.eventNode=this.manager.eventNode;this.parserName="disk_file";this.prefixNode="disk-edit-attach";this.prefixHTMLNode="disk-attach-";this.props={valueEditClassName:"wd-inline-file",securityCID:"disk-upload-cid"};this.storage="disk";this.fileToAttach={};this.xmlToAttach={};this.events={onInit:"DiskDLoadFormControllerInit",onShow:"DiskLoadFormController",onBound:"DiskLoadFormControllerWasBound"}};n.prototype={parser:false,eventNode:null,values:{},initialized:false,functionsToExec:[],exec:function(e,t){if(typeof e=="function")this.functionsToExec.push([e,t]);if(this.handler&&this.handler!==true){var i;while((i=this.functionsToExec.shift())&&i)i[0].apply(this,i[1])}},init:function(){if(this.initialized!==true){this.values={};this.functionsToExec=[];this.initialized=true;this.bindMainEvents(this.manager);if(this.parser!==null){this.bindEvents(this.manager);return this.initValues()}}return false},initValues:function(){var e=BX.findChildren(this.node,{className:this.props.valueEditClassName},true);if(e&&e.length>0){this.exec(this.runCheckText);return true}return false},bindMainEvents:function(t){var i=null;BX.addCustomEvent(t.eventNode,"onReinitializeBefore",BX.proxy(this.clean,this));BX.addCustomEvent(t.eventNode,"onShowControllers",BX.proxy(function(e){i=e;BX.onCustomEvent(t.eventNode,this.events.onShow,[e])},this));if(!e.controller[this.id]){var o=BX.delegate(function(e){if(e["UID"]==this.id||e["id"]==this.id){if(i==="show"||i==="hide"){BX.onCustomEvent(t.eventNode,this.events.onShow,[i]);i=null}BX.removeCustomEvent(window,this.events.onBound,o)}},this);BX.addCustomEvent(window,this.events.onBound,o)}if(BX["DD"]&&this.storage=="disk"){var r=BX.delegate(function(e){if((e["UID"]==this.id||e["id"]==this.id)&&this.manager["dropZoneExists"]!==true){BX.removeCustomEvent(window,this.events.onBound,r);this.manager["dropZoneExists"]=true;var i=this.eventNode,o=this.id;n.dndCatcher=n.dndCatcher||{};n.dndCatcher[o]={catch:true,files:[],dropZone:null,dropZoneMicro:null,initdrag:BX.delegate(function(){n.dndCatcher[o].dropZone=new BX.DD.dropFiles(t.eventNode);BX.addCustomEvent(t.eventNode,"OnImageDataUriHandle",function(e,t){if(BX["UploaderUtils"]){var i=BX.UploaderUtils.dataURLToBlob(t.src);if(i&&i.size>0&&i.type.indexOf("image/")==0){i.name=i.name||t.title||"image."+i.type.substr(6);i.referrerToEditor=t;if(n.dndCatcher[o]["catch"]===true)n.dndCatcher[o]["drop"]([i]);else if(this.handler&&this.handler["addFile"])this.handler.addFile(i);BX.onCustomEvent(e,"OnImageDataUriCaught",[t])}}}.bind(this));BX.addCustomEvent(n.dndCatcher[o].dropZone,"dropFiles",n.dndCatcher[o]["drop"]);BX.addCustomEvent(n.dndCatcher[o].dropZone,"dragEnter",n.dndCatcher[o]["dragover"]);BX.addCustomEvent(n.dndCatcher[o].dropZone,"dragLeave",n.dndCatcher[o]["dragleave"]);if(BX("micro"+t.__divId)){n.dndCatcher[o].dropZoneMicro=new BX.DD.dropFiles(BX("micro"+t.__divId));BX.addCustomEvent(n.dndCatcher[o].dropZoneMicro,"dragEnter",function(){BX.onCustomEvent(t.eventNode,"OnShowLHE",["justShow"])})}BX.unbind(document,"dragover",n.dndCatcher[o]["initdrag"]);BX.onCustomEvent(t.eventNode,"onDropZoneExists",[])},this),dragover:BX.delegate(function(){BX.addClass(t.eventNode,"feed-add-post-dnd-over");BX.onCustomEvent(t.eventNode,"dragover",[])},this),dragleave:BX.delegate(function(){BX.removeClass(t.eventNode,"feed-add-post-dnd-over");BX.onCustomEvent(t.eventNode,"dragleave",[])},this),dragenterwindow:BX.delegate(function(){BX.addClass(t.eventNode,"feed-add-post-dnd-ready");if(BX("micro"+t.__divId)){BX.addClass(BX("micro"+t.__divId),"feed-add-post-micro-dnd-ready")}BX.onCustomEvent(t.eventNode,"dragenterwindow",[])},this),dragleavewindow:BX.delegate(function(e){BX.removeClass(t.eventNode,"feed-add-post-dnd-ready");if(BX("micro"+t.__divId)){BX.removeClass(BX("micro"+t.__divId),"feed-add-post-micro-dnd-ready")}BX.onCustomEvent(t.eventNode,"dragleavewindow",[])},this),drop:BX.delegate(function(e){BX.onCustomEvent(t.eventNode,"drop",[]);BX.onCustomEvent(window,"dragWindowLeave");BX.onCustomEvent(window,"__dragWindowLeave");var i=0;if(e&&e.length>0){if(n.dndCatcher[o]["catch"]===true){n.dndCatcher[o].files=e;i=1}else{i=2}BX.onCustomEvent(t.eventNode,this.events.onShow,["show"]);BX.removeClass(t.eventNode,"feed-add-post-dnd-ready feed-add-post-dnd-over")}return i},this)};BX.ready(function(){n.dndCatcher[o]["initdrag"]()});BX.addCustomEvent(i,"OnIframeDrop",BX.delegate(function(e){BX.PreventDefault(e);if(e["dataTransfer"]&&e["dataTransfer"]["files"]){if(n.dndCatcher[o].drop(e["dataTransfer"]["files"])===2){this.handler.agent.onChange(e["dataTransfer"]["files"])}}},this));BX.addCustomEvent(i,"OnIframeDragOver",n.dndCatcher[o].dragover);BX.addCustomEvent(i,"OnIframeDragLeave",n.dndCatcher[o].dragleave);if(!window["bxMpfDndCatcher"]){window["bxMpfDndCatcher"]=true;var s=false,a=function(){if(s===false){s=true;BX.bind(document,"dragleave",l);BX.bind(document,"dragover",l);BX.bind(document,"mouseout",d);BX.onCustomEvent(window,"dragWindowEnter")}},d=function(e){BX.unbind(document,"dragleave",l);BX.unbind(document,"dragover",l);BX.unbind(document,"mouseout",d);s=false;BX.onCustomEvent(window,"dragWindowLeave")},l=function(e){if(h>0){clearTimeout(h);h=0}BX.fixEventPageXY(e);var t=true;if(e.pageX>0&&e.pageY>0){var i=BX.GetWindowSize();if(e.pageY<i.scrollHeight&&e.pageX<i.scrollWidth){var n=e.pageY-i.scrollTop,o=e.pageX-i.scrollLeft;if(0<n&&n<i.innerHeight-20&&0<o&&o<i.innerWidth-20){t=false}}}if(t){d(e)}else{h=setTimeout(function(){l({type:"intervalLimit"})},100)}},h=0;BX.bind(document,"dragenter",function(e){if(window["bxMpfDndCatcher"]>0){clearTimeout(window["bxMpfDndCatcher"])}var t=true;if(e&&e["dataTransfer"]&&e["dataTransfer"]["types"]){for(var i=0;i<e["dataTransfer"]["types"].length;i++){if(e["dataTransfer"]["types"][i]=="Files"){t=true;break}}}if(t){a()}});BX.addCustomEvent(window,"__dragWindowLeave",d);BX.bind(document,"dragover",function(e){return BX.PreventDefault(e)});BX.bind(document,"drop",function(e){d(e);return BX.PreventDefault(e)})}BX.addCustomEvent(window,"dragWindowEnter",n.dndCatcher[o].dragenterwindow);BX.addCustomEvent(window,"dragWindowLeave",n.dndCatcher[o].dragleavewindow);this.__initCatcher=BX.delegate(function(e,i){if(e==this.id){BX.removeCustomEvent(t.eventNode,"onControllerInitialized",this.__initCatcher);i.agent.initDropZone(t.eventNode);if(n.dndCatcher[e].files.length>0){i.agent.onChange(n.dndCatcher[e].files);n.dndCatcher[e].files=[]}n.dndCatcher[e]["catch"]=false;this.__initCatcher=null}},this);BX.addCustomEvent(t.eventNode,"onControllerInitialized",this.__initCatcher)}},this);BX.addCustomEvent(window,this.events.onBound,r);if(e.controller[this.id])r(e.controller[this.id])}},bindEvents:function(e){this._catchHandler=BX.delegate(function(t){BX.removeCustomEvent(this.eventNode,this.events.onInit,this._catchHandler);this.handler=t;var i=BX.findChild(BX(e.formID),{attr:{id:this.props.securityCID}},true,false);if(i)i.value=this.handler.CID;this.exec();var n=BX.delegate(function(){BX.onCustomEvent(e.eventNode,"onUploadsHasBeenChanged",arguments)},this);BX.addCustomEvent(this.handler.agent,"onFileIsInited",n);BX.addCustomEvent(this.handler.agent,"ChangeFileInput",n);BX.onCustomEvent(e.eventNode,"onControllerInitialized",[this.id,t])},this);if(typeof this.handler!="object"||!this.handler)BX.addCustomEvent(e.eventNode,this.events.onInit,this._catchHandler);else this._catchHandler(this.handler);BX.addCustomEvent(e.eventNode,"OnFileUploadSuccess",BX.delegate(function(e,t,i){if(this.id==t.CID||this.id==t.id){i=i||{};i.usePostfix=true;this.addFile(e,i,t)}},this));BX.addCustomEvent(e.eventNode,"OnFileUploadFailed",BX.delegate(function(e,t,i){if(this.id==t.CID||this.id==t.id){this.failFile(e,i,t)}},this));BX.addCustomEvent(e.eventNode,"OnFileUploadRemove",BX.delegate(function(e,t){if(this.id==t.CID||this.id==t.id){this.deleteFile(e,{usePostfix:true},t)}},this));BX.addCustomEvent(this,"onFileIsInText",BX.proxy(function(e,t){this.adjustFile(this.checkFile(e),t)},this))},addFile:function(e,t,i){var n=this.checkFile(e.element_id,e,t);if(n){setTimeout(BX.proxy(function(){this.bindFile(n);this.adjustFile(n,false)},this),100);BX.onCustomEvent(this.eventNode,"onFileIsAdded",[n,this,i,t])}else{this.failFile(this,t,i)}return true},failFile:function(e,t,i){BX.onCustomEvent(this.eventNode,"onFileIsFailed",[this,i,t])},checkFile:function(e,t){e=""+(typeof e=="object"?e.id:e);if(typeof t=="object"&&t!==null&&e&&t.element_name&&BX(t.place)){var i={id:e,name:t.element_name,url:t.element_url,type:"isnotimage/xyz",isImage:false,place:BX(t.place,true),xmlID:BX(t.place,true).getAttribute("bx-attach-xml-id"),fileID:BX(t.place,true).getAttribute("bx-attach-file-id"),fileType:BX(t.place,true).getAttribute("bx-attach-file-type")},n;if(/(\.png|\.jpg|\.jpeg|\.gif|\.bmp)$/i.test(t.element_name)&&(n=BX.findChild(i.place,{className:"files-preview",tagName:"IMG"},true,false))&&n){i.type="image/xyz";i.lowsrc=n.src;i.element_url=i.src=n.src.replace(/\Wwidth=(\d+)/,"").replace(/\Wheight=(\d+)/,"");i.isImage=true;i.width=parseInt(n.getAttribute("data-bx-full-width")||n.getAttribute("data-bx-width"));i.height=parseInt(n.getAttribute("data-bx-full-height")||n.getAttribute("data-bx-height"))}if(i.xmlID)this.xmlToAttach[i.xmlID+""]=e;if(i.fileID)this.fileToAttach[i.fileID+""]=e;this.values[e]=i}return this.values[e]||false},bindFile:function(e){var t=e.place;if(typeof e=="object"&&t&&!t.hasAttribute("bx-file-is-bound")){var i=BX.findChild(t,{className:"f-wrap"},true,false),n=BX.findChild(t,{className:"files-preview"},true,false);if(i){BX.bind(i,"click",BX.delegate(function(){this.insertFile(e.id)},this));i.style.cursor="pointer";i.title=BX.message("MPF_FILE")}if(n){BX.bind(n,"click",BX.delegate(function(){this.insertFile(e.id)},this))}}},adjustFile:function(e,t){var i=e.place;if(t===true||t===false){if(!e.info)e.info=BX.findChild(e.place,{className:"files-info"},true,false);i=e.info;if(BX.type.isDomNode(i)){var n="check-in-text-"+e.id,o=BX(n),r=t===false?{attrs:{"bx-file-is-in-text":"N"},props:{className:"insert-btn"},html:'<span class="insert-btn-text">'+BX.message("MPF_FILE_INSERT_IN_TEXT")+"</span>"}:{attrs:{"bx-file-is-in-text":"Y"},props:{className:"insert-text"},html:'<span class="insert-btn-text">'+BX.message("MPF_FILE_IN_TEXT")+"</span>"};if(!o){r.attrs.id=n;r.events={click:BX.proxy(function(){this.insertFile(e.id)},this)};i.appendChild(BX.create("SPAN",r))}else{BX.adjust(o,r)}}}},insertFile:function(e){BX.onCustomEvent(this.eventNode,"onFileIsInserted",[this.checkFile(e),this])},deleteFile:function(e,t){e=this.checkFile(e,t);if(e){BX.onCustomEvent(this.eventNode,"onFileIsDeleted",[e,this]);this.values[e.id].place=null;delete this.values[e.id].place;this.values[e.id]=null;delete this.values[e.id];e=null;return true}return false},reinitValues:function(e,t){var i,n,o={};while((i=t.pop())&&i){n=BX(this.prefixHTMLNode+i);n=n?n.tagName=="A"?n:BX.findChild(n,{tagName:"IMG"},true):null;if(n){o["E"+i]={type:"file",id:i,name:n.getAttribute("data-bx-title")||n.getAttribute("data-title"),size:n.getAttribute("data-bx-size")||"",sizeInt:n.getAttribute("data-bx-size")||"",width:n.getAttribute("data-bx-width"),height:n.getAttribute("data-bx-height"),storage:"disk",previewUrl:n.tagName=="A"?"":n.getAttribute("data-bx-src")||n.getAttribute("data-src"),fileId:n.getAttribute("bx-attach-file-id")};if(n.hasAttribute("bx-attach-xml-id"))o["E"+i]["xmlId"]=n.getAttribute("bx-attach-xml-id");if(n.hasAttribute("bx-attach-file-type"))o["E"+i]["fileType"]=n.getAttribute("bx-attach-file-type")}}this.handler.selectFile({},{},o);this.runCheckText()},runCheckText:function(){if(!this._checkText)this._checkText=BX.delegate(this.checkText,this);this.manager.exec(this._checkText)},checkText:function(){var e,t=this.manager.getContent(),i=[],n,o;if(t!=""){e=t;for(o in this.xmlToAttach){if(this.xmlToAttach.hasOwnProperty(o)){t=t.replace(new RegExp("\\&\\#91\\;DOCUMENT ID=("+o+")([WIDTHHEIGHT=0-9 ]*)\\&\\#93\\;","gim"),"["+this.parser["tag"]+"="+this.xmlToAttach[o]+"$2]").replace(new RegExp("\\[DOCUMENT ID=("+o+")([WIDTHHEIGHT=0-9 ]*)\\]","gim"),"["+this.parser["tag"]+"="+this.xmlToAttach[o]+"$2]")}}for(o in this.fileToAttach){if(this.fileToAttach.hasOwnProperty(o)){t=t.replace(new RegExp("\\&\\#91\\;"+this.parser["tag"]+"=("+o+")([WIDTHHEIGHT=0-9 ]*)\\&\\#93\\;","gim"),"["+this.parser["tag"]+"="+this.fileToAttach[o]+"$2]").replace(new RegExp("\\["+this.parser["tag"]+"=("+o+")([WIDTHHEIGHT=0-9 ]*)\\]","gim"),"["+this.parser["tag"]+"="+this.fileToAttach[o]+"$2]")}}n=new RegExp("(?:\\&\\#91\\;)("+this.parser["tags"].join("|")+")=([a-z=0-9 ]+)(?:\\&\\#93\\;)","gim");if(n.test(t)){for(o in this.values){if(this.values.hasOwnProperty(o)){i.push(o)}}if(i.length>0){n=new RegExp("(?:\\&\\#91\\;|\\[)("+this.parser["tags"].join("|")+")=("+i.join("|")+")([WIDTHHEIGHT=0-9 ]*)(?:\\&\\#93\\;|\\])","gim");if(n.test(t))t=t.replace(n,BX.delegate(function(e,t,i,n){return"["+t+"="+i+n+"]"},this))}}if(e!=t)BX.onCustomEvent(this.eventNode,"onFileIsDetected",[t,this])}return t},clean:function(){if(this.handler&&this.handler.values){var e,t,i,n=BX(this.manager.formID);while((e=this.handler.values.pop())&&e){BX.remove(e)}if(this.handler.params&&this.handler.params.controlName){t=BX.findChildren(n,{tagName:"INPUT",attribute:{name:this.handler.params.controlName}},true)}if(t){for(i=0;i<t.length;i++){BX.remove(t[i])}}}},reinit:function(e,t){var i=[],n,o;for(n in t){if(t.hasOwnProperty(n)){if(t[n]["USER_TYPE_ID"]==this.parserName&&t[n]["VALUE"]){for(o in t[n]["VALUE"]){if(t[n]["VALUE"].hasOwnProperty(o)){i.push(t[n]["VALUE"][o])}}}}}if(i.length>0){this.exec(this.reinitValues,[e,i]);return true}return false}};var o=function(e,t,i){o.superclass.constructor.apply(this,arguments);this.parser=e.parser["webdav_element"]||null;this.node=BX("wduf-selectdialog-"+t);this.manager=e;this.parserName="webdav_element";this.prefixNode="wd-doc";this.prefixHTMLNode="wdif-doc-";this.storage="webdav";this.events={onInit:"WDLoadFormControllerInit",onShow:"WDLoadFormController",onBound:"WDLoadFormControllerWasBound"}};BX.extend(o,n);o.prototype.reinitValues=function(e,t){var i,n,o={};this.waitAnswerFromServer=[];while((i=t.pop())&&i){n=BX(this.prefixHTMLNode+i);n=n?n.tagName=="A"?n:BX.findChild(n,{tagName:"IMG"},true):null;if(n){o["E"+i]={type:"file",id:i,name:n.getAttribute("alt"),storage:"webdav",size:n.getAttribute("data-bx-size"),sizeInt:1,ext:"",link:n.getAttribute("data-bx-document")};if(n.hasAttribute("bx-attach-xml-id"))o["E"+i]["xmlId"]=n.getAttribute("bx-attach-xml-id");this.waitAnswerFromServer.push(i)}}if(this.waitAnswerFromServer.length>0){if(!this._defferCheckText)this._defferCheckText=BX.delegate(this.defferCheckText,this);BX.addCustomEvent(this.eventNode,"OnFileUploadSuccess",this._defferCheckText);this.handler.WDFD_SelectFile({},{},o)}};o.prototype.defferCheckText=function(e){var t=BX.util.array_search(e.element_id,this.waitAnswerFromServer);if(t>=0){this.runCheckText();this.waitAnswerFromServer=BX.util.deleteFromArray(this.waitAnswerFromServer,t)}if(this.waitAnswerFromServer.length<=0)BX.removeCustomEvent(this.eventNode,"OnFileUploadSuccess",this._defferCheckText)};var r=function(e,t,i){r.superclass.constructor.apply(this,arguments);this.parser=e.parser["file"]?e.parser["file"]:e.parser["postimage"]["exist"]?e.parser["postimage"]:null;this.postfix=i["postfix"]||"";this.node=BX("file-selectdialog-"+t);this.parserName="file";this.prefixNode="wd-doc";this.prefixHTMLNode="file-doc-";this.props={valueEditClassName:"file-inline-file",securityCID:"upload-cid"};this.storage="bfile";this.events={onInit:"BFileDLoadFormControllerInit",onShow:"BFileDLoadFormController",onBound:"BFileDLoadFormControllerWasBound"}};BX.extend(r,n);r.prototype.initValues=function(e){var t;if(e!==true){t=BX.findChildren(this.node,{className:this.props.valueEditClassName},true);if(t&&t.length>1){this.exec(this.initValues,[true]);return true}return false}t=this.handler.agent.values||[];var i,n,o,r,s={},a="/bitrix/components/bitrix/main.file.input/file.php?mfi_mode=down&cid="+this.handler.CID+"&sessid="+BX.bitrix_sessid();for(var d=0;d<t.length;d++){r=parseInt(t[d].getAttribute("id").replace(this.prefixNode,""));if(s["id"+r])continue;s["id"+r]="Y";if(r>0){n=BX.findChild(t[d],{className:"f-wrap"},true,false);if(!n)continue;o={element_id:r,element_name:n.innerHTML,parser:this.parser.bxTag,storage:"bfile",element_url:a+"&fileID="+r};i=this.addFile(o,{usePostfix:true,hasPreview:false})}}this.runCheckText();return true};r.prototype.checkFile=function(e,t,i){e=""+(typeof e=="object"?e.id:e);e=e+(i&&i["usePostfix"]===true?this.postfix:"");if(typeof t=="object"&&t!==null&&e&&t.element_name&&BX(this.prefixNode+t.element_id,true)){var n={id:e,name:t.element_name,url:t.element_url,type:"isnotimage/xyz",isImage:false,place:BX(this.prefixNode+t.element_id,true)},o;if((t["element_type"]&&t["element_type"].indexOf("image/")===0||/(\.png|\.jpg|\.jpeg|\.gif|\.bmp)$/i.test(t.element_name))&&((o=BX.findChild(n.place,{tagName:"IMG"},true,false))&&o||i&&i["hasPreview"]===false)){n.type="image/xyz";n.src=t["element_thumbnail"]||t["element_url"];n.isImage=true;n.hasPreview=false;n.lowsrc="";n.width="";n.height="";if(BX(o)){n.hasPreview=true;n.lowsrc=t["element_thumbnail"]||o["src"];n.width=parseInt(o.getAttribute("data-bx-full-width"));n.height=parseInt(o.getAttribute("data-bx-full-height"))}}else if(this.parser.bxTag=="postimage"){return false}if(BX(n.place,true).getAttribute("bx-attach-file-type")){n.fileType=BX(n.place,true).getAttribute("bx-attach-file-type")}this.values[e]=n}return this.values[e]||false};r.prototype.bindFile=function(e){var t=e&&e["place"]?e["place"]:null;if(typeof e=="object"&&t&&!t.hasAttribute("bx-file-is-bound")){if(e.isImage&&e.hasPreview){var i=BX.findChild(t,{className:"feed-add-img-title"},true,false),n=BX.findChild(t,{className:"feed-add-img-wrap"},true,false);if(n){BX.bind(n,"click",BX.proxy(function(){this.insertFile(e)},this));n.style.cursor="pointer";n.title=BX.message("MPF_IMAGE")}if(i){BX.bind(i,"click",BX.delegate(function(){this.insertFile(e)},this));i.style.cursor="pointer";i.title=BX.message("MPF_IMAGE")}}else r.superclass.bindFile.apply(this,arguments)}};r.prototype.clean=function(){r.superclass.clean.apply(this,arguments);if(this["handler"]&&this.handler["agent"]&&this.handler.agent["inputName"]){var e,t,i=BX(this.manager.formID);e=BX.findChildren(i,{tagName:"INPUT",attribute:{name:this.handler.agent.inputName+"[]"}},true);if(e){for(t=0;t<e.length;t++){BX.remove(e[t])}}}};var s=function(t,i){this.params=i;this.formID=t;this.showPinButton=!!BX("lhe_button_editor_"+this.formID);if(this.showPinButton){this.params.showPanelEditor=!!this.params.pinEditorPanel}this.oEditorId=i["LHEJsObjId"];this.__divId=i["LHEJsObjName"]||i["LHEJsObjId"];e.handler[this.oEditorId]=this;e.form[this.formID]=this;this.oEditor=s.getEditor(this.oEditorId);this.urlPreview=this.initUrlPreview(i);this.eventNode=BX("div"+this.__divId);BX.addCustomEvent(this.eventNode,"OnShowLHE",BX.delegate(this.OnShowLHE,this));BX.addCustomEvent(this.eventNode,"OnButtonClick",BX.delegate(this.OnButtonClick,this));BX.addCustomEvent(this.eventNode,"OnAfterShowLHE",function(e,t){if(t.oEditor&&t.oEditor["AllowBeforeUnloadHandler"])t.oEditor.AllowBeforeUnloadHandler();if(t.monitoringWakeUp===true)t.monitoringStart()});BX.addCustomEvent(this.eventNode,"OnAfterHideLHE",function(e,t){t.monitoringWakeUp=t.monitoringStop();if(t.oEditor&&t.oEditor["DenyBeforeUnloadHandler"])t.oEditor.DenyBeforeUnloadHandler()});this.initParsers(i);this.initFiles(t,i);BX.ready(BX.delegate(function(){if(BX("lhe_button_submit_"+t,true)){BX.bind(BX("lhe_button_submit_"+t,true),"click",BX.proxy(function(e){BX.onCustomEvent(this.eventNode,"OnButtonClick",["submit"]);return BX.PreventDefault(e)},this))}if(BX("lhe_button_cancel_"+t,true)){BX.bind(BX("lhe_button_cancel_"+t,true),"click",BX.proxy(function(e){BX.onCustomEvent(this.eventNode,"OnButtonClick",["cancel"]);return BX.PreventDefault(e)},this))}},this));this.inited=true;if(BX(this.formID)){BX.addCustomEvent(BX(this.formID),"onAutoSavePrepare",function(e){e.FORM.setAttribute("bx-lhe-autosave-prepared","Y")})}BX.onCustomEvent(this,"onInitialized",[this,t,i,this.parsers]);BX.onCustomEvent(this.eventNode,"onInitialized",[this,t,i,this.parsers]);if(this.oEditor&&this.oEditor.inited&&!this.oEditor["__lhe_flags"]){BX.onCustomEvent(this.oEditor,"OnEditorInitedBefore",[this.oEditor]);BX.onCustomEvent(this.oEditor,"OnEditorInitedAfter",[this.oEditor,true])}};s.prototype={editorIsLoaded:false,arFiles:{},parser:{},controllers:{},exec:function(e,t){this.functionsToExec=this.functionsToExec||[];if(typeof e=="function")this.functionsToExec.push([e,t]);if(this.editorIsLoaded===true){var i;while((i=this.functionsToExec.shift())&&i)i[0].apply(this,i[1])}},initParsers:function(e){this.parser={postimage:{exist:false,bxTag:"postimage",tag:"IMG ID",tags:["IMG ID"],regexp:/\[(IMG ID)=((?:\s|\S)*?)(?:\s*?WIDTH=(\d+)\s*?HEIGHT=(\d+))?\]/gi,code:"[IMG ID=#ID##ADDITIONAL#]",wysiwyg:'<img id="#ID#" src="'+'#SRC#" lowsrc="'+'#LOWSRC#" title=""#ADDITIONAL# />'},player:{exist:false,bxTag:"player",tag:"FILE ID",tags:["FILE ID"],regexp:/\[(FILE ID)=((?:\s|\S)*?)?\]/gi,code:"[FILE ID=#ID##ADDITIONAL#]",wysiwyg:'<img class="bxhtmled-player-surrogate" id="#ID#" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" contenteditable="false" title=""#ADDITIONAL# />'}};var t=e["parsers"]?e["parsers"]:{};for(var n in t){if(t.hasOwnProperty(n)&&/[a-z]/gi.test(n+"")){this.parser[n]=new i(n,t[n])}}if(BX.util.object_search("UploadImage",t)){this.parser["postimage"]["exist"]=true}if(typeof e["arSize"]=="object"){var o="";if(e["arSize"]["width"])o+="max-width:"+e["arSize"]["width"]+"px;";if(e["arSize"]["height"])o+="max-height:"+e["arSize"]["height"]+"px;";if(o!=="")this.parser["postimage"]["wysiwyg"]=this.parser["postimage"]["wysiwyg"].replace("#ADDITIONAL#",' style="'+o+'" #ADDITIONAL#')}},initFiles:function(e,t){this.arFiles={};this.controllers={common:{postfix:"",storage:"bfile",parser:"postimage",node:window,obj:null,init:false}};this.monitoring={interval:null,text:"",savedText:"",files:[],savedFiles:[]};if(!t["CID"]||typeof t["CID"]!=="object")return;BX.addCustomEvent(this.eventNode,"onFileIsAdded",BX.delegate(this.OnFileUploadSuccess,this));BX.addCustomEvent(this.eventNode,"onFileIsFailed",BX.delegate(this.OnFileUploadFailed,this));BX.addCustomEvent(this.eventNode,"onFileIsDeleted",BX.delegate(this.OnFileUploadRemove,this));BX.addCustomEvent(this.eventNode,"onFileIsDetected",BX.delegate(this.setContent,this));BX.addCustomEvent(this.eventNode,"onFileIsInserted",BX.delegate(this.insertFile,this));var i,s,a;for(s in t["CID"]){if(t["CID"].hasOwnProperty(s)){i=t["CID"][s]["parser"];if(i=="disk_file")this.controllers[s]=new n(this,s,t["CID"][s]);else if(i=="webdav_element")this.controllers[s]=new o(this,s,t["CID"][s]);else if(i=="file")this.controllers[s]=new r(this,s,t["CID"][s]);if(this.controllers[s]&&this.controllers[s].init()&&!a)a=true}}BX.ready(BX.delegate(function(){BX.bind(BX("bx-b-uploadfile-"+e),"click",BX.proxy(this.controllerInit,this));if(a)this.controllerInit("show")},this))},controllerInit:function(e){this.controllerInitStatus=e=="show"||e=="hide"?e:this.controllerInitStatus=="show"?"hide":"show";BX.onCustomEvent(this.eventNode,"onShowControllers",[this.controllerInitStatus])},initUrlPreview:function(){if(this.params["urlPreviewId"]&&window["BXUrlPreview"]&&BX(this.params["urlPreviewId"])){return new BXUrlPreview(BX(this.params["urlPreviewId"]))}return null},getContent:function(){return this.oEditor?this.oEditor.GetContent():""},setContent:function(e){if(this.oEditor)this.oEditor.SetContent(e)},OnFileUploadSuccess:function(e,t,i,n){if(this.controllers[t.id]){var o=t.parser.bxTag+e.id;this.arFiles[o]=this.arFiles[o]||[];this.arFiles[o].push(t.id);if(n&&n["referrerToEditor"]){var r=this.getFileToInsert(e,t);BX.onCustomEvent(n["referrerToEditor"],"OnImageDataUriCaughtUploaded",[r]);BX.onCustomEvent(this.oEditor,"OnImageDataUriCaughtUploaded",[n["referrerToEditor"],e,r])}else if(i===true&&e.isImage&&this.insertImageAfterUpload){if(!this._insertFile)this._insertFile=BX.delegate(this.insertFile,this);this.exec(this._insertFile,arguments)}}},OnFileUploadFailed:function(e,t,i){if(i&&i["referrerToEditor"]){BX.onCustomEvent(i["referrerToEditor"],"OnImageDataUriCaughtFailed",[]);BX.onCustomEvent(this.editor,"OnImageDataUriCaughtFailed",[i["referrerToEditor"]])}},OnFileUploadRemove:function(e,t){if(this.controllers[t.id]){var i=t.parser.bxTag+e.id;if(this.arFiles[i]){var n=BX.util.array_search(t.id,this.arFiles[i]);this.arFiles[i]=BX.util.deleteFromArray(this.arFiles[i],n);if(!this.arFiles[i]||this.arFiles[i].length<=0){this.arFiles[i]=null;delete this.arFiles[i];if(!this._deleteFile)this._deleteFile=BX.delegate(this.deleteFile,this);this.exec(this._deleteFile,arguments)}}}},showPanelEditor:function(e,t){if(e==undefined)e=!this.oEditor.toolbar.IsShown();this.params.showPanelEditor=e;var i=BX("lhe_button_editor_"+this.formID),n=BX("panel-close"+this.__divId);if(n){this.oEditor.dom.cont.appendChild(n)}if(e){this.oEditor.dom.toolbarCont.style.opacity="inherit";this.oEditor.toolbar.Show();if(i)BX.addClass(i,"feed-add-post-form-btn-active");if(n)n.style.display=""}else{this.oEditor.toolbar.Hide();if(i)BX.removeClass(i,"feed-add-post-form-btn-active");if(n)n.style.display="none"}if(t!==false)BX.userOptions.save("main.post.form","postEdit","showBBCode",e?"Y":"N")},monitoring:{},monitoringStart:function(){if(this.monitoring.interval===null){if(!this._monitoringStart){this._monitoringStart=BX.delegate(this.checkFilesInText,this);BX.addCustomEvent(this.oEditor,"OnContentChanged",BX.proxy(function(e){this.monitoring.text=e},this))}this.monitoring.interval=setInterval(this._monitoringStart,1e3)}},monitoringStop:function(){var e=this.monitoring.interval!==null;if(this.monitoring.interval!==null)clearInterval(this.monitoring.interval);this.monitoring.interval=null;return e},monitoringSetStatus:function(e,t,i){if(this.arFiles[e+t]){var n;for(var o=0;o<this.arFiles[e+t].length;o++){n=this.arFiles[e+t][o];BX.onCustomEvent(this.controllers[n],"onFileIsInText",[t,i])}}},checkFilesInText:function(){if(this.monitoring.text!==this.monitoring.savedText){this.monitoring.savedText=this.monitoring.text;this.monitoring.files=[];var e=this.monitoring.savedText,t,i=function(e,t){return function(i,n,o){e.monitoring.files.push([t,o].join("/"))}};for(t in this.parser){if(this.parser.hasOwnProperty(t)){if(!this.parser[t]["checkFilesInText"]){this.parser[t]["checkFilesInText"]=i(this,t)}e.replace(this.parser[t]["regexp"],this.parser[t]["checkFilesInText"])}}if(this.monitoring.savedFiles.join(",")!==this.monitoring.files.join(",")){var n={},o;while(o=this.monitoring.savedFiles.pop()){n[o]=null}for(t=0;t<this.monitoring.files.length;t++){o=this.monitoring.files[t];n[o]=n[o]>=0?n[o]+1:1}for(t in n){if(n.hasOwnProperty(t)){o=t.split("/");this.monitoringSetStatus(o[0],o[1],n[t]>0)}}}this.monitoring.savedFiles=this.monitoring.files;if(this.monitoring.savedFiles.length<=0)this.monitoringStop()}},checkFile:function(e,t){var i=false;if(typeof e=="string"){var n=typeof t=="string"?t:t.parser;if(!!this.arFiles[n+e]){var o=this.arFiles[n+e][0];t=this.controllers[o];i={file:t.values[e],controller:t}}}else if(this.controllers[t.id]){i={file:e,controller:t}}return i},insertFile:function(e,t){var i=this.oEditor;if(i&&e){var n=i.GetViewMode(),o=this.getFileToInsert(e,t);if(n=="wysiwyg"){i.InsertHtml(o.replacement);setTimeout(BX.delegate(i.AutoResizeSceleton,i),500);setTimeout(BX.delegate(i.AutoResizeSceleton,i),1e3)}else if(n=="code"){i.textareaView.Focus();if(!i.bbCode){var r=i.GetIframeDoc();var s=r.createElement("DIV");s.style.display="none";s.innerHTML=o.replacement;r.body.appendChild(s);o.replacement=i.Parse(o.replacement,true,false);s.parentNode.removeChild(s)}i.textareaView.WrapWith("","",o.replacement)}else{return}o["callback"]()}},getFileToInsert:function(e,t){var i=this.oEditor;if(i&&e){var n=e["id"],o="",r=t.parser,s=i.bbCode?i.GetViewMode():"wysiwyg",a=this.parser[r.bxTag][s];if(e["fileType"]&&this.parser[e["fileType"]]&&s=="wysiwyg"){a=this.parser[e["fileType"]][s]}if(e["isImage"]){a=s=="wysiwyg"?this.parser["postimage"][s]:a;if(e.width>0&&e.height>0&&i.sEditorMode=="html"){o=' style="width:'+e.width+"px;height:"+e.height+"px;\" onload=\"this.style.width='auto';this.style.height='auto';\""}}if(s=="wysiwyg"){a=a.replace("#ID#",i.SetBxTag(false,{tag:r.bxTag,params:{value:n}})).replace("#SRC#",e.src).replace("#URL#",e.url).replace("#LOWSRC#",e.lowsrc||"").replace("#NAME#",e.name).replace("#ADDITIONAL#",o)+"<span>&nbsp;</span>"}else if(s=="code"&&i.bbCode){a=a.replace("#ID#",n).replace("#ADDITIONAL#","")}return{replacement:a,callback:BX.proxy(function(){this.monitoringSetStatus(t.parser.bxTag,e.id,true);this.monitoringStart()},this)}}return{replacement:"",callback:BX.DoNothing}},deleteFile:function(e,t){var i=this.oEditor,n=t.parser,o=e.id,r=i.GetContent();if(n&&r.indexOf("="+o)>=0){if(i.GetViewMode()=="wysiwyg"){var s=i.GetIframeDoc(),a,d;for(a in i["bxTags"]){if(i["bxTags"].hasOwnProperty(a)){if(typeof i.bxTags[a]=="object"&&i.bxTags[a]["params"]&&i.bxTags[a]["params"]["value"]==e.id){d=s.getElementById(a);if(d)d.parentNode.removeChild(d)}}}i.SaveContent()}else{r=r.replace(n.regexp,function(t,i,n){return n==e.id?"":t});i.SetContent(r);i.Focus()}this.monitoringSetStatus(n.bxTag,e.id,false)}},reinit:function(e,t){BX.onCustomEvent(this.eventNode,"onReinitializeBefore",[this,e,t]);this.arFiles={};delete this.monitoringWakeUp;this.monitoringStop();this.oEditor.CheckAndReInit(e||"");BX.onCustomEvent(this.eventNode,"onReinitialize",[this,e,t]);var i,n=false;for(i in this.controllers){if(this.controllers.hasOwnProperty(i)){if(this.controllers[i]["init"]&&this.controllers[i].reinit(e,t))n=true}}this.controllerInit(n?"show":"hide");if(this.params["~height"]){this.oEditor.SetConfigHeight(this.params["~height"]);this.oEditor.ResizeSceleton()}if(this.urlPreview){this.urlPreview.detachUrlPreview();var o;for(var r in t){if(t.hasOwnProperty(r)&&t[r].hasOwnProperty("USER_TYPE_ID")&&t[r]["USER_TYPE_ID"]==="url_preview"){o=t[r]["VALUE"]}}if(o)this.urlPreview.attachUrlPreview({id:o})}},Parse:function(e,t,i){var n=this.parser[e],o=this;if(n){t=t.replace(n.regexp,function(t,r,s,a,d){var l=o.checkFile(s,e);if(l&&(l=l.file)&&l){var h="",f=l.isImage?o.parser.postimage.wysiwyg:n.wysiwyg;o.monitoringStart();if(l.fileType&&o.parser[l.fileType]&&o.parser[l.fileType].wysiwyg){f=o.parser[l.fileType].wysiwyg}if(l.isImage){a=parseInt(a);d=parseInt(d);h=a&&d?' width="'+a+'" height="'+d+'"':"";if(h===""&&l["width"]>0&&l["height"]>0){h=' style="width:'+l["width"]+"px;height:"+l["height"]+"px;\" onload=\"this.style.width='auto';this.style.height='auto';\""}}return f.replace("#ID#",i.SetBxTag(false,{tag:e,params:{value:s}})).replace("#NAME#",l.name).replace("#SRC#",l.src).replace("#LOWSRC#",l.lowsrc).replace("#ADDITIONAL#",h).replace("#WIDTH#",parseInt(a)).replace("#HEIGHT#",parseInt(d))}return t})}return t},Unparse:function(e,t){var i="",n=e.tag;if(this.parser[n]){var o=parseInt(t.node.hasAttribute("width")?t.node.getAttribute("width"):0),r=parseInt(t.node.hasAttribute("height")?t.node.getAttribute("height"):0),s="";if(o>0&&r>0){s=" WIDTH="+o+" HEIGHT="+r}i=this.parser[n]["code"].replace("#ID#",e.params.value).replace("#ADDITIONAL#",s).replace("#WIDTH#",o).replace("#HEIGHT#",r)}return i},OnShowLHE:function(e,t,i){var n=this.__divId;e=e===false?false:e==="hide"?"hide":e==="justShow"?"justShow":true;this.oEditor=this.oEditor||s.getEditor(this.oEditorId);if(!this.oEditor)return;this.oEditor.Init();var o=BX("micro"+n),r=this.eventNode;if(o){o.style.display=e===true||e==="justShow"?"none":"block"}if(e=="hide"){BX.onCustomEvent(this.eventNode,"OnBeforeHideLHE",[e,this]);if(this.eventNode.style.display=="none"){BX.onCustomEvent(this.eventNode,"OnAfterHideLHE",[e,this])}else{new BX["easing"]({duration:200,start:{opacity:100,height:this.eventNode.scrollHeight},finish:{opacity:0,height:20},transition:BX.easing.makeEaseOut(BX.easing.transitions.quad),step:function(e){r.style.height=e.height+"px";r.style.opacity=e.opacity/100},complete:BX.proxy(function(){this.eventNode.style.cssText="";this.eventNode.style.display="none";BX.onCustomEvent(r,"OnAfterHideLHE",[e,this])},this)}).animate()}}else if(e){BX.onCustomEvent(this.eventNode,"OnBeforeShowLHE",[e,this]);if(e=="justShow"){this.eventNode.style.display="block";BX.onCustomEvent(this.eventNode,"OnAfterShowLHE",[e,this]);if(i!==false)this.oEditor.Focus()}else if(this.eventNode.style.display=="block"){BX.onCustomEvent(this.eventNode,"OnAfterShowLHE",[e,this]);if(i!==false)this.oEditor.Focus()}else{BX.adjust(this.eventNode,{style:{display:"block",overflow:"hidden",height:"20px",opacity:.1}});new BX["easing"]({duration:200,start:{opacity:10,height:20},finish:{opacity:100,height:r.scrollHeight},transition:BX["easing"].makeEaseOut(BX.easing.transitions.quad),step:function(e){r.style.height=e.height+"px";r.style.opacity=e.opacity/100},complete:BX.proxy(function(){BX.onCustomEvent(r,"OnAfterShowLHE",[e,this]);this.oEditor.Focus();this.eventNode.style.cssText=""},this)}).animate()}}else{BX.onCustomEvent(this.eventNode,"OnBeforeHideLHE",[e,this]);this.eventNode.style.display="none";BX.onCustomEvent(this.eventNode,"OnAfterHideLHE",[e,this])}},OnButtonClick:function(e){if(e!=="cancel"){var t={result:true};BX.onCustomEvent(this.eventNode,"OnClickBeforeSubmit",[this,t]);if(t["result"]!==false)BX.onCustomEvent(this.eventNode,"OnClickSubmit",[this])}else{d.node=null;BX.onCustomEvent(this.eventNode,"OnClickCancel",[this]);BX.onCustomEvent(this.eventNode,"OnShowLHE",["hide"])}},OnEditorInitedBefore:function(e){var t=this;this.oEditor=e;e.formID=this.formID;if(this.params)this.params["~height"]=e.config["height"];BX.addCustomEvent(e,"OnCtrlEnter",function(){e.SaveContent();if(BX.type.isNotEmptyString(t.params["ctrlEnterHandler"])&&typeof window[t.params["ctrlEnterHandler"]]=="function")window[t.params["ctrlEnterHandler"]]();else if(BX.type.isFunction(t.params["ctrlEnterHandler"]))t.params["ctrlEnterHandler"]();else BX.submit(BX(t.formID))});var i=this.params.parsers?this.params.parsers:[];if(BX.util.object_search("Spoiler",i)){e.AddButton({id:"spoiler",name:BX.message("spoilerText"),iconClassName:"spoiler",disabledForTextarea:false,src:BX.message("MPF_TEMPLATE_FOLDER")+"/images/lhespoiler.png",toolbarSort:205,handler:function(){var e=this,t=false;if(!e.editor.bbCode||!e.editor.synchro.IsFocusedOnTextarea()){t=e.editor.action.actions.formatBlock.exec("formatBlock","blockquote","bx-spoiler",false,{bxTagParams:{tag:"spoiler"}})}else{t=e.editor.action.actions.formatBbCode.exec("quote",{tag:"SPOILER"})}return t}});e.AddParser({name:"spoiler",obj:{Parse:function(e,t,i){if(/\[(cut|spoiler)(([^\]])*)\]/gi.test(t)){t=t.replace(/[\001-\006]/gi,"").replace(/\[cut(((?:=)[^\]]*)|)\]/gi,"\x01$1\x01").replace(/\[\/cut]/gi,"\x02").replace(/\[spoiler([^\]]*)\]/gi,"\x03$1\x03").replace(/\[\/spoiler]/gi,"\x04");var n=/(?:\001([^\001]*)\001)([^\001-\004]+)\002/gi,o=/(?:\003([^\003]*)\003)([^\001-\004]+)\004/gi,r=function(e,t){e=e.replace(/^(="|='|=)/gi,"").replace(/("|')?$/gi,"");return'<blockquote class="bx-spoiler" id="'+i.SetBxTag(false,{tag:"spoiler"})+'" title="'+e+'">'+t+"</blockquote>"},s=function(e,t,i){return r(t,i)};while(t.match(n)||t.match(o)){t=t.replace(n,s).replace(o,s)}}t=t.replace(/\001([^\001]*)\001/gi,"[cut$1]").replace(/\003([^\003]*)\003/gi,"[spoiler$1]").replace(/\002/gi,"[/cut]").replace(/\004/gi,"[/spoiler]");return t},UnParse:function(t,i){if(t.tag=="spoiler"){var n="",o;for(o=0;o<i.node.childNodes.length;o++){n+=e.bbParser.GetNodeHtml(i.node.childNodes[o])}n=BX.util.trim(n);if(n!="")return"[SPOILER"+(i.node.hasAttribute("title")?"="+i.node.getAttribute("title"):"")+"]"+n+"[/SPOILER]"}return""}}})}if(BX.util.object_search("MentionUser",i)){e.AddParser({name:"postuser",obj:{Parse:function(t,i){i=i.replace(/\[USER\s*=\s*(\d+)\]((?:\s|\S)*?)\[\/USER\]/gi,function(t,i,n){n=BX.util.trim(n);if(n=="")return"";return'<span id="'+e.SetBxTag(false,{tag:"postuser",params:{value:parseInt(i)}})+'" class="bxhtmled-metion">'+n+"</span>"});return i},UnParse:function(t,i){if(t.tag=="postuser"){var n="",o;for(o=0;o<i.node.childNodes.length;o++){n+=e.bbParser.GetNodeHtml(i.node.childNodes[o])}n=BX.util.trim(n);if(n!="")return"[USER="+t.params.value+"]"+n+"[/USER]"}return""}}})}var n=function(i,n){return t.Parse(i,n,e)},o=function(e,i){return t.Unparse(e,i)};for(var r in this.parser){if(this.parser.hasOwnProperty(r)){e.AddParser({name:r,obj:{Parse:n,UnParse:o}})}}if(this.showPinButton){this.pinEditorPanel=this.params&&this.params.pinEditorPanel===true;var s="toolbar_pin";var a=function(e,i){a.superclass.constructor.apply(this,arguments);this.id=s;this.title=BX.message("MPF_PIN_EDITOR_PANNEL");this.className+=" "+(t.pinEditorPanel?"bxhtmled-button-toolbar-pined":"bxhtmled-button-toolbar-pin");this.Create();if(i)i.appendChild(this.GetCont())};BX.extend(a,window.BXHtmlEditor.Button);a.prototype.OnClick=function(){BX.removeClass(this.pCont,"bxhtmled-button-toolbar-pined");BX.removeClass(this.pCont,"bxhtmled-button-toolbar-pin");if(t.pinEditorPanel){t.pinEditorPanel=false;BX.addClass(this.pCont,"bxhtmled-button-toolbar-pin")}else{t.pinEditorPanel=true;BX.addClass(this.pCont,"bxhtmled-button-toolbar-pined")}BX.userOptions.save("main.post.form","postEdit","pinEditorPanel",t.pinEditorPanel?"Y":"N")};window.BXHtmlEditor.Controls[s]=a;BX.addCustomEvent(e,"GetControlsMap",function(e){e.push({id:s,compact:true,hidden:false,sort:500,checkWidth:true,offsetWidth:32,wrap:"right"})})}},OnEditorInitedAfter:function(t){BX.addCustomEvent(t,"OnIframeDrop",BX.proxy(function(){BX.onCustomEvent(this.eventNode,"OnIframeDrop",arguments)},this));BX.addCustomEvent(t,"OnIframeDragOver",BX.proxy(function(){BX.onCustomEvent(this.eventNode,"OnIframeDragOver",arguments)},this));BX.addCustomEvent(t,"OnIframeDragLeave",BX.proxy(function(){BX.onCustomEvent(this.eventNode,"OnIframeDragLeave",arguments)},this));BX.addCustomEvent(t,"OnImageDataUriHandle",function(){BX.onCustomEvent(this.eventNode,"OnImageDataUriHandle",Array.prototype.slice.call(arguments))}.bind(this));BX.addCustomEvent(t,"OnAfterUrlConvert",this.OnAfterUrlConvert.bind(this));BX.addCustomEvent(t,"OnAfterLinkInserted",this.OnAfterUrlConvert.bind(this));BX.addCustomEvent(t,"OnBeforeCommandExec",this.OnBeforeCommandExec.bind(this));t.contextMenu.items["postimage"]=t.contextMenu.items["postdocument"]=t.contextMenu.items["postfile"]=[{TEXT:BX.message("BXEdDelFromText"),bbMode:true,ACTION:function(){var e=t.contextMenu.GetTargetItem("postimage");if(!e)e=t.contextMenu.GetTargetItem("postdocument");if(!e)e=t.contextMenu.GetTargetItem("postfile");if(e&&e.element){t.selection.RemoveNode(e.element)}t.contextMenu.Hide()}}];if(!this.params["lazyLoad"]){BX.onCustomEvent(this.eventNode,"OnShowLHE",["justShow",t,false])}if(t.toolbar.controls&&t.toolbar.controls.FontSelector){t.toolbar.controls.FontSelector.SetWidth(45)}if(BX(this.formID)){BX.addCustomEvent(BX(this.formID),"onAutoSavePrepare",function(e){var i=e;setTimeout(function(){BX.addCustomEvent(t,"OnContentChanged",BX.proxy(function(e){this["mpfTextContent"]=e;this.Init()},i))},1500)});BX.addCustomEvent(BX(this.formID),"onAutoSave",BX.proxy(function(e,t){if(BX.type.isNotEmptyString(e["mpfTextContent"]))t["text"+this.formID]=e["mpfTextContent"]},this));BX.addCustomEvent(BX(this.formID),"onAutoSaveRestore",BX.proxy(function(i,n){if(e.handler[t.id]){for(var o in e.handler[t.id].controllers){if(e.handler[t.id].controllers.hasOwnProperty(o)&&e.handler[t.id].controllers[o].handler&&e.handler[t.id].controllers[o].handler.params&&e.handler[t.id].controllers[o].handler.params.controlName&&e.handler[t.id].controllers[o].handler.params.controlName){delete n[e.handler[t.id].controllers[o].handler.params.controlName]}}}if(n["text"+this.formID]&&/[^\s]+/gi.test(n["text"+this.formID])){t.CheckAndReInit(n["text"+this.formID])}},this));if(BX(this.formID).hasAttribute("bx-lhe-autosave-prepared")&&BX(this.formID).BXAUTOSAVE){BX(this.formID).removeAttribute("bx-lhe-autosave-prepared");setTimeout(BX.proxy(function(){BX(this.formID).BXAUTOSAVE.Prepare()},this),100)}}var i=this.formID,n=this.params;this.showPanelEditor(n.showPanelEditor,false);if(!t.mainPostFormCustomized){t.mainPostFormCustomized=true;BX.addCustomEvent(t,"OnIframeKeydown",function(e){if(window.onKeyDownHandler){window.onKeyDownHandler(e,t,i)}});BX.addCustomEvent(t,"OnIframeKeyup",function(e){if(window.onKeyUpHandler){window.onKeyUpHandler(e,t,i)}});if(window["BXfpdStopMent"+i]){BX.addCustomEvent(t,"OnIframeClick",function(){window["BXfpdStopMent"+i]()})}if(t&&t.textareaView.GetCursorPosition){BX.addCustomEvent(t,"OnTextareaKeyup",function(e){if(window.onTextareaKeyUpHandler){window.onTextareaKeyUpHandler(e,t,i)}});BX.addCustomEvent(t,"OnTextareaKeydown",function(e){if(window.onTextareaKeyDownHandler){window.onTextareaKeyDownHandler(e,t,i)}})}}},OnAfterUrlConvert:function(e){if(this.urlPreview){this.urlPreview.attachUrlPreview({url:e})}},OnBeforeCommandExec:function(e,t,i,n){if(this.urlPreview&&t=="createLink"&&BX.type.isPlainObject(n)&&n.hasOwnProperty("href")){this.urlPreview.attachUrlPreview({url:n.href})}}};s.getEditor=function(e){return window["BXHtmlEditor"]?window["BXHtmlEditor"].Get(typeof e=="object"?e.id:e):null};s.getHandler=function(t){return e.handler[typeof t=="object"?t.id:t]};s.getHandlerByFormId=function(t){return e.form[t]};s.unsetHandler=function(t){var i=typeof t=="object"?t.id:t;if(!e.handler[i])return;if(e.handler[i].oEditor)e.handler[i].oEditor.Destroy();e.handler[i]=null};s.reinitData=function(e,t,i){var n=s.getHandler(e);if(n)n.exec(n.reinit,[t,i]);return false};s.reinitDataBefore=function(e){var t=s.getHandler(e);if(t&&t["eventNode"])BX.onCustomEvent(t.eventNode,"onReinitializeBefore",[t])};window.LHEPostForm=s;window.BXPostFormTags=function(e,t){this.popup=null;this.formID=e;this.buttonID=t;this.sharpButton=null;this.addNewLink=null;this.tagsArea=null;this.hiddenField=null;this.popupContent=null;BX.ready(BX.proxy(this.init,this))};window.BXPostFormTags.prototype.init=function(){this.sharpButton=BX(this.buttonID);this.addNewLink=BX("post-tags-add-new-"+this.formID);this.tagsArea=BX("post-tags-block-"+this.formID);this.tagsContainer=BX("post-tags-container-"+this.formID);this.hiddenField=BX("post-tags-hidden-"+this.formID);this.popupContent=BX("post-tags-popup-content-"+this.formID);this.popupInput=BX.findChild(this.popupContent,{tag:"input"});var e=BX.findChildren(this.tagsContainer,{className:"feed-add-post-del-but"},true);for(var t=0,i=e.length;t<i;t++){BX.bind(e[t],"click",BX.proxy(this.onTagDelete,{obj:this,tagBox:e[t].parentNode,tagValue:e[t].parentNode.getAttribute("data-tag")}))}BX.bind(this.sharpButton,"click",BX.proxy(this.onButtonClick,this));BX.bind(this.addNewLink,"click",BX.proxy(this.onAddNewClick,this))};window.BXPostFormTags.prototype.onTagDelete=function(){BX.remove(this.tagBox);this.obj.hiddenField.value=this.obj.hiddenField.value.replace(this.tagValue+",","").replace("  "," ")};window.BXPostFormTags.prototype.show=function(){if(this.popup===null){this.popup=new BX.PopupWindow("bx-post-tag-popup",this.addNewLink,{content:this.popupContent,lightShadow:false,offsetTop:8,offsetLeft:10,autoHide:true,angle:true,closeByEsc:true,zIndex:-840,buttons:[new BX.PopupWindowButton({text:BX.message("TAG_ADD"),events:{click:BX.proxy(this.onTagAdd,this)}})]});BX.bind(this.popupInput,"keydown",BX.proxy(this.onKeyPress,this));BX.bind(this.popupInput,"keyup",BX.proxy(this.onKeyPress,this))}this.popup.show();BX.focus(this.popupInput)};window.BXPostFormTags.prototype.addTag=function(e){var t=BX.type.isNotEmptyString(e)?e.split(","):this.popupInput.value.split(",");var i=[];for(var n=0;n<t.length;n++){var o=BX.util.trim(t[n]);if(o.length>0){var r=this.hiddenField.value.split(",");if(!BX.util.in_array(o,r)){var s;var a=BX.create("span",{children:[s=BX.create("span",{attrs:{class:"feed-add-post-del-but"}})],attrs:{class:"feed-add-post-tags"}});a.insertBefore(document.createTextNode(o),s);this.tagsContainer.insertBefore(a,this.addNewLink);BX.bind(s,"click",BX.proxy(this.onTagDelete,{obj:this,tagBox:a,tagValue:o}));this.hiddenField.value+=o+",";i.push(o)}}}return i};window.BXPostFormTags.prototype.onTagAdd=function(){this.addTag();this.popupInput.value="";this.popup.close()};window.BXPostFormTags.prototype.onAddNewClick=function(e){e=e||window.event;this.show();BX.PreventDefault(e)};window.BXPostFormTags.prototype.onButtonClick=function(e){e=e||window.event;BX.show(this.tagsArea);this.show();BX.PreventDefault(e)};window.BXPostFormTags.prototype.onKeyPress=function(e){e=e||window.event;var t=e.keyCode?e.keyCode:e.which?e.which:null;if(t==13){setTimeout(BX.proxy(this.onTagAdd,this),0)}};window.BXPostFormImportant=function(e,t,i){if(i){this.formID=e;this.buttonID=t;this.inputName=i;this.fireButton=null;this.activeBlock=null;this.hiddenField=null;BX.ready(BX.proxy(this.init,this))}return false};window.BXPostFormImportant.prototype.init=function(){this.fireButton=BX(this.buttonID);this.activeBlock=BX(this.buttonID+"-active");var e=BX(this.formID);if(e){this.hiddenField=e[this.inputName];if(this.hiddenField&&this.hiddenField.value==1){this.showActive()}}BX.bind(this.fireButton,"click",BX.proxy(function(e){e=e||window.event;this.showActive();BX.PreventDefault(e)},this));BX.bind(this.activeBlock,"click",BX.proxy(function(e){e=e||window.event;this.hideActive();BX.PreventDefault(e)},this))};window.BXPostFormImportant.prototype.showActive=function(e){BX.hide(this.fireButton);BX.show(this.activeBlock,"inline-block");if(this.hiddenField){this.hiddenField.value=1}return false};window.BXPostFormImportant.prototype.hideActive=function(e){BX.hide(this.activeBlock);BX.show(this.fireButton,"inline-block");if(this.hiddenField){this.hiddenField.value=0}return false};var a=null;window.MPFbuttonShowWait=function(e){if(e&&!BX.type.isElementNode(e))e=null;e=e||this;e=e?e.tagName=="A"?e:e.parentNode:e;if(e){BX.addClass(e,"ui-btn-clock");a=e;BX.defer(function(){e.disabled=true})()}};window.MPFbuttonCloseWait=function(e){if(e&&!BX.type.isElementNode(e))e=null;e=e||a||this;if(e){e.disabled=false;BX.removeClass(e,"ui-btn-clock");a=null}};window.__mpf_wd_getinfofromnode=function(e,t){var i=BX.findChild(BX((e["prefixNode"]||"wd-doc")+e.element_id),{className:"files-preview",tagName:"IMG"},true,false);if(i){e.lowsrc=i.src;e.element_url=i.src.replace(/\Wwidth=(\d+)/,"").replace(/\Wheight\=(\d+)/,"");e.width=parseInt(i.getAttribute("data-bx-full-width"));e.height=parseInt(i.getAttribute("data-bx-full-height"))}else if(t.urlGet){e.element_url=t.urlGet.replace("#element_id#",e.element_id).replace("#ELEMENT_ID#",e.element_id).replace("#element_name#",e.element_name).replace("#ELEMENT_NAME#",e.element_name)}};var d={listen:false,plus:false,text:"",bSearch:false,node:null,mode:null};window.onKeyDownHandler=function(e,t,i){var n=e.keyCode;if(!window["BXfpdStopMent"+i])return true;var o=window.MPFgetSelectorId("bx-mention-"+i+"-id");if(n===t.KEY_CODES["backspace"]&&d.node){var r=BX.util.trim(t.util.GetTextContent(d.node));if(r==="+"||r==="@"||d.mode=="button"&&r.length==1){window["BXfpdStopMent"+i]()}else if(d.mode=="button"&&r.length==1){window["BXfpdStopMent"+i]()}}if(BX.util.in_array(n,[107,187])||(e.shiftKey||e.modifiers>3)&&BX.util.in_array(n,[50,43,61])||e.altKey&&BX.util.in_array(n,[76])||typeof e.getModifierState==="function"&&!!e.getModifierState("AltGraph")&&BX.util.in_array(n,[81])){setTimeout(function(){var e=t.selection.GetRange(),i=t.GetIframeDoc(),n=e?e.endContainer.textContent:"",r=n?n.slice(e.endOffset-1,e.endOffset):"",s=n?n.slice(e.endOffset-2,e.endOffset-1):"";if((r=="@"||r=="+")&&(!s||BX.util.in_array(s,["+","@",",","("])||s.length==1&&BX.util.trim(s)==="")){d.listen=true;d.listenFlag=true;d.text="";d.leaveContent=true;d.mode="plus";e.setStart(e.endContainer,e.endOffset-1);e.setEnd(e.endContainer,e.endOffset);t.selection.SetSelection(e);d.node=BX.create("SPAN",{props:{id:"bx-mention-node"}},i);t.selection.Surround(d.node,e);e.setStart(d.node,1);e.setEnd(d.node,1);t.selection.SetSelection(e);if(BX.type.isNotEmptyString(o)){BX.onCustomEvent(window,"BX.MPF.MentionSelector:open",[{id:o,bindPosition:l(d.node,t)}])}}},10)}if(d.listen){var s=null;if(BX.type.isNotEmptyString(o)){s=BX.UI.SelectorManager.instances[o]}var a=false;if(s){a=s.getNavigationInstance().checkKeyboardNavigation({keyCode:n,tab:d.bSearch?"search":s?s.tabs.selected:false})}if(a){t.iframeKeyDownPreventDefault=true;e.stopPropagation();e.preventDefault()}}if(!d.listen&&d.listenFlag&&n===t.KEY_CODES["enter"]){var h=t.selection.GetRange();if(h.collapsed){var f=h.endContainer,u=t.GetIframeDoc();if(f){if(f.className!=="bxhtmled-metion"){f=BX.findParent(f,function(e){return e.className=="bxhtmled-metion"},u.body)}if(f&&f.className=="bxhtmled-metion"){t.selection.SetAfter(f)}}}}};window.onKeyUpHandler=function(e,t,i){var n=e.keyCode,o,r;if(!window["BXfpdStopMent"+i])return true;if(d.listen===true){if(n==t.KEY_CODES["escape"]){window["BXfpdStopMent"+i]()}else if(n!==t.KEY_CODES["enter"]&&n!==t.KEY_CODES["left"]&&n!==t.KEY_CODES["right"]&&n!==t.KEY_CODES["up"]&&n!==t.KEY_CODES["down"]){if(BX(d.node)){r=BX.util.trim(t.util.GetTextContent(d.node));var s=r;r=r.replace(/^[\+@]*/,"");d.bSearch=r.length>0;var a=window.MPFgetSelectorId("bx-mention-"+i+"-id");if(BX.type.isNotEmptyString(a)){var h=BX.UI.SelectorManager.instances[a];if(BX.type.isNotEmptyObject(h)){h.getSearchInstance().runSearch({text:r})}}if(d.leaveContent&&d._lastText&&s===""){window["BXfpdStopMent"+i]()}else if(d.leaveContent&&d.lastText&&s!==""&&r===""){d.bSearch=false;window["BXfpdStopMent"+i]();if(BX.type.isNotEmptyString(a)){BX.onCustomEvent(window,"BX.MPF.MentionSelector:open",[{id:a,bindPosition:l(d.node,t)}])}}d.lastText=r;d._lastText=s}else{window["BXfpdStopMent"+i]()}}}else{if(!e.shiftKey&&(n===t.KEY_CODES["space"]||n===t.KEY_CODES["escape"]||n===188||n===190)){o=t.selection.GetRange();if(o.collapsed){var f=o.endContainer,u=t.GetIframeDoc();if(f){if(f.className!=="bxhtmled-metion"){f=BX.findParent(f,function(e){return e.className=="bxhtmled-metion"},u.body)}if(f&&f.className=="bxhtmled-metion"){r=t.util.GetTextContent(f);var c=r.match(/[\s\.\,]$/);if(c||n===t.KEY_CODES["escape"]){f.innerHTML=r.replace(/[\s\.\,]$/,"");var p=BX.create("SPAN",{html:c||t.INVISIBLE_SPACE},u);t.util.InsertAfter(p,f);t.selection.SetAfter(p)}}}}}}};window.onTextareaKeyDownHandler=function(e,t,i){var n=e.keyCode;if(d.listen&&n==t.KEY_CODES["enter"]){var o=window.MPFgetSelectorId("bx-mention-"+i+"-id");if(BX.type.isNotEmptyString(o)){var r=BX.UI.SelectorManager.instances[o];if(BX.type.isNotEmptyObject(r)){r.getNavigationInstance().selectFirstItem({tab:d.bSearch?"search":r.tabs.selected})}}t.textareaKeyDownPreventDefault=true;e.stopPropagation();e.preventDefault()}};window.onTextareaKeyUpHandler=function(e,t,i){var n,o,r=e.keyCode;var s=window.MPFgetSelectorId("bx-mention-"+i+"-id");if(d.listen===true){if(r==27){window["BXfpdStopMent"+i]()}else if(r!==13){o=t.textareaView.GetValue(false);n=t.textareaView.GetCursorPosition();if(o.indexOf("+")!==-1||o.indexOf("@")!==-1){var a=o.substr(0,n),l=Math.max(a.lastIndexOf("+"),a.lastIndexOf("@"));if(l>=0){var h=a.substr(l),f=h;h=h.replace(/^[\+@]*/,"");d.bSearch=h.length>0;var u=null;if(BX.type.isNotEmptyString(s)){u=BX.UI.SelectorManager.instances[s]}if(BX.type.isNotEmptyObject(u)){u.getSearchInstance().runSearch({text:h})}if(d.leaveContent&&d._lastText&&(f===""||h==="")){window["BXfpdStopMent"+i]()}d.lastText=h;d._lastText=f}}}}else{if(r==16){var c=this;this.shiftPressed=true;if(this.shiftTimeout)this.shiftTimeout=clearTimeout(this.shiftTimeout);this.shiftTimeout=setTimeout(function(){c.shiftPressed=false},100)}if(r==107||(e.shiftKey||e.modifiers>3||this.shiftPressed)&&BX.util.in_array(r,[187,50,107,43,61])){n=t.textareaView.element.selectionStart;if(n>0){o=t.textareaView.element.value;var p=o.substr(n-1,1);if(p&&(p==="+"||p==="@")){d.listen=true;d.listenFlag=true;d.text="";d.textarea=true;d.bSearch=false;d.mode="plus";if(BX.type.isNotEmptyString(s)){BX.onCustomEvent(window,"BX.MPF.MentionSelector:open",[{id:s}])}}}}}};var l=function(e,t){var i=BX.pos(e),n=BX.pos(t.dom.areaCont),o=BX.GetWindowScrollPos(t.GetIframeDoc()),r=n.top+i.bottom-o.scrollTop+2,s=n.left+i.right-o.scrollLeft;return{top:r,left:s}};window.BxInsertMention=function(e){var t=e.item,i=e.type,n=e.formID,o=e.editorId,r=e.bNeedComa,a=s.getEditor(o),l;if(i=="users"&&t&&t.entityId>0&&a){if(a.GetViewMode()=="wysiwyg"){var h=a.GetIframeDoc(),f=a.selection.GetRange(),u=BX.create("SPAN",{props:{className:"bxhtmled-metion"},text:BX.util.htmlspecialcharsback(t.name)},h);l=BX.create("SPAN",{html:r?",&nbsp;":"&nbsp;"},h);a.SetBxTag(u,{tag:"postuser",params:{value:t.entityId}});if(BX(d.node)&&d.node.parentNode){a.util.ReplaceNode(d.node,u)}else{a.selection.InsertNode(u,f)}if(u&&u.parentNode){var c=BX.findParent(u,{className:"bxhtmled-metion"},h.body);if(c){a.util.InsertAfter(u,c)}}if(u&&u.parentNode){a.util.InsertAfter(l,u);a.selection.SetAfter(l)}}else if(a.GetViewMode()=="code"&&a.bbCode){a.textareaView.Focus();var p=a.textareaView.GetValue(false),m=a.textareaView.GetCursorPosition(),v=p.substr(0,m),B=Math.max(v.lastIndexOf("+"),v.lastIndexOf("@"));if(B>=0&&m>B){a.textareaView.SetValue(p.substr(0,B)+p.substr(m));a.textareaView.element.setSelectionRange(B,B)}a.textareaView.WrapWith(false,false,"[USER="+t.entityId+"]"+t.name+"[/USER]"+(r?", ":" "))}if(e.fireAddEvent===true){BX.onCustomEvent(window,"onMentionAdd",[t])}var g=window.MPFgetSelectorId("bx-mention-"+n+"-id");if(BX.type.isNotEmptyString(g)){var X=BX.UI.SelectorManager.instances[g];if(BX.type.isNotEmptyObject(X)){if(typeof X.itemsSelected[t.id]!="undefined"){delete X.itemsSelected[t.id]}}}window["BXfpdStopMent"+n]();d["text"]="";if(a.GetViewMode()=="wysiwyg"){a.Focus();a.selection.SetAfter(l)}}};window.MPFgetSelectorId=function(e){var t=false;var i=BX(e);if(!i){return t}t=i.getAttribute("data-bx-selector-id");return t};window.MPFMentionInit=function(e,t){if(t.initDestination===true){BX.addCustomEvent("onAutoSaveRestoreDestination",function(t){if(BX.type.isNotEmptyObject(t)&&BX.type.isNotEmptyObject(t.data)&&BX.type.isNotEmptyObject(t.data["DEST_CODES[]"])&&BX.type.isNotEmptyString(t.formId)&&t.formId==e&&BX.UI.SelectorManager){var i=window.MPFgetSelectorId(t.formId);var n=BX.UI.SelectorManager.instances[i];if(!BX.type.isNotEmptyObject(n)){return}var o=null,r=null,s={},a=[],d=false;for(var l=0;l<t.data["DEST_CODES[]"].length;l++){o=t.data["DEST_CODES[]"][l];if(o=="UA"){s[o]="groups"}d=o.match(/^U(\d+)$/i);if(d){s[o]="users";continue}d=o.match(/^SG(\d+)$/i);if(d){s[o]="sonetgroups";continue}d=o.match(/^DR(\d+)$/i);if(d){s[o]="departments";continue}d=o.match(/^UE(.+)$/i);if(d&&BX.SocialnetworkUISelector){r=d[1];a.push({selectorId:i,name:BX.type.isNotEmptyString(t.data["INVITED_USER_NAME["+r+"]"])?t.data["INVITED_USER_NAME["+r+"]"]:"",lastName:BX.type.isNotEmptyString(t.data["INVITED_USER_LAST_NAME["+r+"]"])?t.data["INVITED_USER_LAST_NAME["+r+"]"]:"",email:r,createCrmContact:BX.type.isNotEmptyString(t.data["INVITED_USER_CREATE_CRM_CONTACT["+r+"]"])?t.data["INVITED_USER_CREATE_CRM_CONTACT["+r+"]"]:""})}}n.itemsSelected=s;BX.addCustomEvent(window,"BX.Main.SelectorV2:afterInitDialog",function(e){if(e.id==i&&BX.SocialnetworkUISelector){for(var t=0;t<a.length;t++){BX.SocialnetworkUISelector.inviteEmailAddUser(a[t])}}})}});BX.addCustomEvent(window,"onMentionAdd",function(t){var i=window.MPFgetSelectorId(e);var n=BX.UI.SelectorManager.instances[i];if(!BX.type.isNotEmptyObject(n)){return}var o=BX.Main.selectorManagerV2.getById(n.id);if(BX.type.isNotEmptyObject(o)&&BX.type.isBoolean(o.initialized)){if(o.initialized){if(!BX.type.isNotEmptyObject(n.entities.USERS.items[t.id])){n.entities.USERS.items[t.id]=t}n.setOption("focusInputOnSelectItem","N");if(!BX.type.isNotEmptyString(n.itemsSelected[t.id])){n.selectItem({itemId:t.id,entityType:"USERS"})}}else{n.itemsSelected[t.id]="users";o.initDialog()}}})}window["BXfpdSelectCallbackMent"+e]=function(i){window.BxInsertMention({item:i.item,type:i.entityType.toLowerCase(),formID:e,editorId:t.editorId,fireAddEvent:t.initDestination})};window["BXfpdStopMent"+e]=function(){var t=window.MPFgetSelectorId("bx-mention-"+e+"-id");if(BX.type.isNotEmptyString(t)){var i=BX.UI.SelectorManager.instances[t];if(BX.type.isNotEmptyObject(i)){i.closeAllPopups();i.getSearchInstance().abortSearchRequest()}}};if(BX(e)){BX.addCustomEvent(BX(e),"OnUCFormAfterShow",function(t){if(!BX.type.isNotEmptyObject(t)||!BX.type.isArray(t.id)||!BX.type.isNotEmptyString(t.id[0])){return}var i=new RegExp("EVENT_(\\d+)","i");if(!i.test(t.id[0])){return}var n=window.MPFgetSelectorId("bx-mention-"+e+"-id");if(!BX.type.isNotEmptyString(n)){return}var o=BX.UI.SelectorManager.instances[n];if(!BX.type.isNotEmptyObject(o)){return}o.bindOptions.zIndex=2200})}BX.ready(function(){var i=BX("bx-b-mention-"+e);var n=window.MPFgetSelectorId("bx-mention-"+e+"-id");if(n){BX.onCustomEvent(window,"BX.MPF.MentionSelector:init",[{id:n,openDialogWhenInit:false}])}BX.bind(i,"click",function(e){if(d.listen!==true){var o=s.getEditor(t.editorId),r=o.GetIframeDoc();if(o.GetViewMode()=="wysiwyg"&&r){d.listen=true;d.listenFlag=true;d.text="";d.leaveContent=false;d.mode="button";var a=o.selection.GetRange();if(BX(d.node)){BX.remove(BX(d.node))}o.InsertHtml('<span id="bx-mention-node">'+o.INVISIBLE_SPACE+"</span>",a);setTimeout(function(){if(n){BX.onCustomEvent(window,"BX.MPF.MentionSelector:open",[{id:n,bindNode:i}])}d.node=r.getElementById("bx-mention-node");if(d.node){a.setStart(d.node,0);if(d.node.firstChild&&d.node.firstChild.nodeType==3&&d.node.firstChild.nodeValue.length>0){a.setEnd(d.node,1)}else{a.setEnd(d.node,0)}o.selection.SetSelection(a)}o.Focus()},100)}else if(o.GetViewMode()=="code"){d.listen=true;d.listenFlag=true;d.text="";d.leaveContent=false;d.mode="button";setTimeout(function(){if(n){BX.onCustomEvent(window,"BX.MPF.MentionSelector:open",[{id:n,bindNode:i}])}},100)}BX.onCustomEvent(i,"mentionClick")}})})};window.BXfpdOnDialogOpen=function(){d.listen=true;d.listenFlag=true};window.BXfpdOnDialogClose=function(e){d.listen=false;setTimeout(function(){d.listenFlag=false;if(!d.listen){var t=s.getEditor(e.editorId);if(t){var i=t.GetIframeDoc();if(BX(d.node)){t.selection.SetAfter(d.node);if(d.leaveContent){t.util.ReplaceWithOwnChildren(d.node)}else{BX.remove(BX(d.node))}}t.Focus()}}},100)}})();
/* End */
;; /* /bitrix/components/bitrix/player/wmvplayer/wmvscript.js?1605208815188*/
; /* /bitrix/components/bitrix/player/wmvplayer/silverlight.js?160520881517327*/
; /* /bitrix/components/bitrix/player/wmvplayer/wmvplayer.js?160520881524361*/
; /* /bitrix/components/bitrix/player/mediaplayer/flvscript.js?1605208808654*/
; /* /bitrix/components/bitrix/main.share/templates/.default/script.min.js?1605208751468*/
; /* /bitrix/components/bitrix/main.post.form/templates/.default/script.min.js?160520874960736*/

//# sourceMappingURL=page_dcac0f4841deadd8b956ee0d6321acf1.map.js