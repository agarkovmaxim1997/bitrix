{"version":3,"sources":["url_list.js"],"names":["BX","namespace","addClass","Landing","Utils","removeClass","append","onCustomEvent","setTextContent","create","style","isNumber","isString","isPlainObject","isArray","addQueryParams","TYPE_PAGE","TYPE_BLOCK","TYPE_SYSTEM","SidebarButton","UI","Button","Panel","URLList","id","data","Content","apply","this","arguments","layout","overlay","hidden","dataset","isShown","refresh","bind","document","body","loader","Loader","target","content","promiseResolve","isNeedLoad","cache","Cache","MemoryCache","getInstance","instance","prototype","constructor","__proto__","showLoader","show","view","options","showOptions","call","clear","title","panelTitle","Loc","getMessage","showSites","showBlocks","Promise","resolve","currentSiteId","siteId","width","Type","filter","env","Env","isNil","ID","getType","getSiteId","SPECIAL","Backend","getSites","then","sites","appendSidebarButton","text","forEach","site","parseInt","currentSiteButton","TITLE","onClick","onSiteClick","enableAreas","child","active","getLandings","landings","fakeEvent","currentTarget","siteClick","appendCard","Card","AddPageCard","onSave","addPageSave","landing","IS_AREA","LandingPreviewCard","description","DESCRIPTION","preview","PREVIEW","onLandingClick","hide","currentSiteOnly","createCurrentSiteButton","currentLandingId","landingId","sitesIds","map","reduce","result","index","currentLandings","SITE_ID","currentPageOnly","button","createLandingSidebarButton","click","Object","keys","createSiteSidebarButton","onLandingChange","event","currentSelectedLanding","sidebarButtons","activate","deactivate","showPreviewLoader","createIframeIfNeed","loadPreviewSrc","buildLandingPreviewUrl","hidePreviewLoader","editorUrl","Main","params","sef_url","landing_view","replace","forceLoad","landing_mode","src","previewFrame","onload","contentDocument","removePanels","slice","querySelectorAll","wrapper","classList","add","addEventListener","preventDefault","onBlockClick","previewFrameWrapper","opacity","attrs","appendChild","innerHTML","requestAnimationFrame","containerWidth","clientWidth","height","transform","transform-origin","border","isTrusted","getBlocks","blocks","currentBlock","find","block","onChange","type","name","alias","onSystemClick","closest","createLandingPreview","reloadFn","backend","delete","createBlockPreview","BlockHTMLPreview","getLanding","key","JSON","stringify","remember","action","get_preview","response","getBlock","cacheKey","edit_mode","value"],"mappings":"CAAC,WACA,aAEAA,GAAGC,UAAU,uBAEb,IAAIC,EAAWF,GAAGG,QAAQC,MAAMF,SAChC,IAAIG,EAAcL,GAAGG,QAAQC,MAAMC,YACnC,IAAIC,EAASN,GAAGG,QAAQC,MAAME,OAC9B,IAAIC,EAAgBP,GAAGG,QAAQC,MAAMG,cACrC,IAAIC,EAAiBR,GAAGG,QAAQC,MAAMI,eACtC,IAAIC,EAAST,GAAGG,QAAQC,MAAMK,OAC9B,IAAIC,EAAQV,GAAGG,QAAQC,MAAMM,MAC7B,IAAIC,EAAWX,GAAGG,QAAQC,MAAMO,SAChC,IAAIC,EAAWZ,GAAGG,QAAQC,MAAMQ,SAChC,IAAIC,EAAgBb,GAAGG,QAAQC,MAAMS,cACrC,IAAIC,EAAUd,GAAGG,QAAQC,MAAMU,QAC/B,IAAIC,EAAiBf,GAAGG,QAAQC,MAAMW,eAEtC,IAAIC,EAAY,UAChB,IAAIC,EAAa,QACjB,IAAIC,EAAc,SAElB,IAAIC,EAAgBnB,GAAGG,QAAQiB,GAAGC,OAAOF,cAWzCnB,GAAGG,QAAQiB,GAAGE,MAAMC,QAAU,SAASC,EAAIC,GAE1CzB,GAAGG,QAAQiB,GAAGE,MAAMI,QAAQC,MAAMC,KAAMC,WAExC3B,EAAS0B,KAAKE,OAAQ,6BACtB5B,EAAS0B,KAAKG,QAAS,qCACvB7B,EAAS0B,KAAKG,QAAS,mBAEvBH,KAAKG,QAAQC,OAAS,KACtBJ,KAAKG,QAAQE,QAAQC,QAAU,QAG/B3B,EAAc,wBAAyBqB,KAAKO,QAAQC,KAAKR,OACxDrB,EAAc,0BAA2BqB,KAAKO,QAAQC,KAAKR,OAG5DtB,EAAOsB,KAAKE,OAAQO,SAASC,MAG7BV,KAAKW,OAAS,IAAIvC,GAAGwC,QAAQC,OAAQb,KAAKc,UAE1Cd,KAAKe,eAAiB,aACtBf,KAAKE,OAAOE,OAAS,KACrBJ,KAAKgB,WAAa,KAClBhB,KAAKiB,MAAQ,IAAI7C,GAAG8C,MAAMC,aAQ3B/C,GAAGG,QAAQiB,GAAGE,MAAMC,QAAQyB,YAAc,WAEzC,IAAKhD,GAAGG,QAAQiB,GAAGE,MAAMC,QAAQ0B,SACjC,CACCjD,GAAGG,QAAQiB,GAAGE,MAAMC,QAAQ0B,SAAW,IAAIjD,GAAGG,QAAQiB,GAAGE,MAAMC,QAAQ,YAGxE,OAAOvB,GAAGG,QAAQiB,GAAGE,MAAMC,QAAQ0B,UASpCjD,GAAGG,QAAQiB,GAAGE,MAAMC,QAAQ0B,SAAW,KAGvCjD,GAAGG,QAAQiB,GAAGE,MAAMC,QAAQ2B,WAC3BC,YAAanD,GAAGG,QAAQiB,GAAGE,MAAMC,QACjC6B,UAAWpD,GAAGG,QAAQiB,GAAGE,MAAMI,QAAQwB,UAMvCf,QAAS,WAERP,KAAKgB,WAAa,MAOnBS,WAAY,WAEXzB,KAAKW,OAAOe,KAAK1B,KAAKc,UAUvBY,KAAM,SAASC,EAAMC,GAEpB5B,KAAK6B,YAAcD,EACnBxD,GAAGG,QAAQiB,GAAGE,MAAMI,QAAQwB,UAAUI,KAAKI,KAAK9B,MAEhDA,KAAK+B,QACL/B,KAAKyB,aAEL,GAAIE,IAASvC,EACb,CACCX,EAAYuB,KAAKE,OAAQ,oCACzBtB,EAAeoB,KAAKgC,MAAOJ,EAAQK,YAAc7D,GAAGG,QAAQ2D,IAAIC,WAAW,iCAC3EnC,KAAKoC,UAAUR,OAGhB,CACChD,EAAeoB,KAAKgC,MAAOJ,EAAQK,YAAc7D,GAAGG,QAAQ2D,IAAIC,WAAW,+BAC3EnC,KAAKqC,WAAWT,GAGjB,OAAO,IAAIU,QAAQ,SAASC,GAC3BvC,KAAKe,eAAiBwB,GACrB/B,KAAKR,QAORoC,UAAW,SAASR,GAEnB,IAAIY,EAAgBZ,EAAQa,YAEvB3D,EAAMkB,KAAKE,QACfwC,MAAO,OAGR,IAAKtE,GAAGuE,KAAK1D,cAAc2C,EAAQgB,QACnC,CACChB,EAAQgB,UAGT,IAAIC,EAAMzE,GAAGG,QAAQuE,IAAI1B,cACzB,GAAIhD,GAAGuE,KAAKI,MAAMnB,EAAQgB,OAAOI,KAAOH,EAAII,YAAc,QAC1D,CACCrB,EAAQgB,OAAOI,GAAKH,EAAIK,YAGzB,GAAItB,EAAQgB,OAAOI,MAAQ,EAC3B,QACQpB,EAAQgB,OAAOI,GAGvBpB,EAAQgB,OAAOO,QAAU,SAEpB/E,GAAGG,QAAQ6E,QAAQhC,cACtBiC,SAASzB,GAAS0B,KAAK,SAASC,GAChCvD,KAAKwD,oBACJ,IAAIjE,EAAc,gBACjBkE,KAAMrF,GAAGG,QAAQ2D,IAAIC,WAAW,uCAIlCoB,EAAMG,QAAQ,SAASC,GAEtB,GAAIC,SAASD,EAAKX,KAAOR,EACzB,CACCxC,KAAK6D,kBAAoB,IAAItE,EAAcoE,EAAKX,IAC/CS,KAAME,EAAKG,MACXC,QAAS/D,KAAKgE,YAAYxD,KAAKR,KAAM2D,EAAKX,GAAIpB,EAAQqC,aACtDC,MAAO,KACPC,OAAQ,OAGTnE,KAAKwD,oBAAoBxD,KAAK6D,qBAE7B7D,MAEH5B,GAAGG,QAAQ6E,QAAQhC,cACjBgD,aAAa3B,OAAQD,IACrBc,KAAK,SAASe,GACd,IAAIC,GAAaC,cAAevE,KAAK6D,kBAAkB3D,QACvD,IAAIsE,EAAYxE,KAAKgE,YAAYxD,KAAKR,KAAMwC,EAAeZ,EAAQqC,YAAaK,GAChFtE,KAAKyE,WACJ,IAAIrG,GAAGG,QAAQiB,GAAGkF,KAAKC,aACtBlC,OAAQD,EACRoC,OAAQ5E,KAAK6E,YAAYrE,KAAKR,KAAMwE,EAAWhC,MAGjD6B,EAASX,QAAQ,SAASoB,GACzB,IAAKA,EAAQC,SAAYD,EAAQC,SAAWnD,EAAQqC,YACpD,CACCjE,KAAKyE,WACJ,IAAIrG,GAAGG,QAAQiB,GAAGkF,KAAKM,oBACtBhD,MAAO8C,EAAQhB,MACfmB,YAAaH,EAAQI,YACrBC,QAASL,EAAQM,QACjBrB,QAAS/D,KAAKqF,eAAe7E,KAAKR,KAAM8E,EAAQ9B,GAAI8B,EAAQhB,YAI7D9D,MAEHA,KAAKW,OAAO2E,QACX9E,KAAKR,OAER,IAAK4B,EAAQ2D,gBACb,CACCvF,KAAKwD,oBACJ,IAAIjE,EAAc,YACjBkE,KAAMrF,GAAGG,QAAQ2D,IAAIC,WAAW,mCAIlCoB,EAAMG,QAAQ,SAASC,GACtB3D,KAAKwD,oBACJ,IAAIjE,EAAcoE,EAAKX,IACtBS,KAAME,EAAKG,MACXC,QAAS/D,KAAKgE,YAAYxD,KAAKR,KAAM2D,EAAKX,GAAIpB,EAAQqC,aACtDC,MAAO,SAGPlE,QAEHQ,KAAKR,QAOTwF,wBAAyB,WAExB,OAAO,IAAIjG,EAAc,gBACxBkE,KAAMrF,GAAGG,QAAQ2D,IAAIC,WAAW,uCASlCE,WAAY,SAAST,GAEpB,IAAI6D,EAAmB7D,EAAQ8D,UAC/B,IAAIlD,EAAgBZ,EAAQa,YAEvB3D,EAAMkB,KAAKE,QACfwC,MAAO,UAGRtE,GAAGG,QAAQ6E,QAAQhC,cACjBiC,SAASzB,GACT0B,KAAK,SAASC,GACdvD,KAAKwD,oBACJxD,KAAKwF,2BAGN,IAAIG,EAAWpC,EAAMqC,IAAI,SAASjC,GACjC,OAAOA,EAAKX,IACVhD,MAEH,OAAO5B,GAAGG,QAAQ6E,QAAQhC,cACxBgD,aAAa3B,OAAQkD,IACrBrC,KAAK,SAASe,GACd,OAAOd,EAAMsC,OAAO,SAASC,EAAQnC,EAAMoC,GAC1C,IAAIC,EAAkB3B,EAASzB,OAAO,SAASkC,GAC9C,OAAOnB,EAAKX,KAAO8B,EAAQmB,UAG5BH,EAAOnC,EAAKX,KAAOW,KAAMA,EAAMU,SAAU2B,GACzC,OAAOF,UAGTtF,KAAKR,OACNsD,KAAK,SAASwC,GACdA,EAAOtD,GAAe6B,SAASX,QAAQ,SAASoB,GAC/C,IAAIX,EAASP,SAASkB,EAAQ9B,MAAQY,SAAS6B,GAE/C,IAAK7D,EAAQsE,iBAAmB/B,EAChC,CACC,IAAIgC,EAASnG,KAAKoG,2BAA2BtB,EAASX,GACtDnE,KAAKwD,oBAAoB2C,GAEzB,GAAIhC,EACJ,CACCgC,EAAOjG,OAAOmG,WAIdrG,MAEH,IAAK4B,EAAQsE,gBACb,CACCI,OAAOC,KAAKT,GAAQpC,QAAQ,SAASjB,GACpC,GAAImB,SAASnB,KAAYmB,SAASpB,GAClC,CACC,IAAImB,EAAOmC,EAAOrD,GAAQkB,KAC1B3D,KAAKwD,oBACJxD,KAAKwG,wBAAwB7C,IAG9BmC,EAAOrD,GAAQ4B,SAASX,QAAQ,SAASoB,GACxC9E,KAAKwD,oBACJxD,KAAKoG,2BAA2BtB,KAE/B9E,QAEFA,QAEHQ,KAAKR,QAIToG,2BAA4B,SAAStB,EAASX,GAE7C,OAAO,IACF5E,EAAcuF,EAAQ9B,IACzBS,KAAMqB,EAAQhB,MACdC,QAAS/D,KAAKyG,gBAAgBjG,KAAKR,KAAM8E,GACzCZ,MAAO,KACPC,OAAQA,KAKXqC,wBAAyB,SAAS7C,GAEjC,OAAO,IACFpE,EAAcoE,EAAKX,IACtBS,KAAME,EAAKG,MACXI,MAAO,MACPC,OAAQ,SAMXsC,gBAAiB,SAAS3B,EAAS4B,GAElC1G,KAAK2G,uBAAyB7B,EAC9B9E,KAAK4G,eAAelD,QAAQ,SAASyC,GACpC,GAAIA,EAAOjG,SAAWwG,EAAMnC,cAC5B,CACC4B,EAAOU,WACP,OAGDV,EAAOW,eAGR9G,KAAK+G,oBACHzD,KAAKtD,KAAKgH,sBACV1D,KAAKtD,KAAKiH,eAAejH,KAAKkH,uBAAuBpC,KACrDxB,KAAKtD,KAAKmH,sBAIbD,uBAAwB,SAASpC,GAEhC,IAAIsC,EAAYhJ,GAAGG,QAAQ8I,KAAKjG,cAAcQ,QAAQ0F,OAAOC,QAAQC,aACrEJ,EAAYA,EAAUK,QAAQ,cAAe3C,EAAQmB,SACrDmB,EAAYA,EAAUK,QAAQ,iBAAkB3C,EAAQ9B,IAExD,OAAO7D,EAAeiI,GACrBM,UAAW,KACXC,aAAc,UAIhBV,eAAgB,SAASW,GAExB,OAAO,WAEN,OAAO,IAAItF,QAAQ,SAASC,GAC3B,GAAIvC,KAAK6H,aAAaD,MAAQA,EAC9B,CACC5H,KAAK6H,aAAaD,IAAMA,EACxB5H,KAAK6H,aAAaC,OAAS,WAC1B,IAAIC,EAAkB/H,KAAK6H,aAAaE,gBACxC3J,GAAGG,QAAQC,MAAMwJ,aAAaD,MAC3BE,MAAMnG,KAAKiG,EAAgBG,iBAAiB,mBAC7CxE,QAAQ,SAASyE,GACjBA,EAAQC,UAAUC,IAAI,uCACtBF,EAAQG,iBAAiB,QAAS,SAAS5B,GAC1CA,EAAM6B,iBACNvI,KAAKwI,aAAa5E,SAASuE,EAAQvI,GAAG6H,QAAQ,QAAS,KAAMf,IAC5DlG,KAAKR,QACLA,MACJuC,EAAQvC,KAAK6H,eACZrH,KAAKR,MACP,OAGDuC,EAAQvC,KAAK6H,eACZrH,KAAKR,QACNQ,KAAKR,OAGR+G,kBAAmB,WAElB,IAAK/G,KAAKW,OACV,CACCX,KAAKW,OAAS,IAAIvC,GAAGwC,OAGtB,GAAIZ,KAAKyI,oBACT,MACM3J,EAAMkB,KAAKyI,qBACfC,QAAS,IAIX,OAAO,IAAIpG,QAAQ,SAASC,QACtBvC,KAAKW,OAAOe,KAAK1B,KAAKc,SAC3ByB,KACC/B,KAAKR,QAIRmH,kBAAmB,WAElB,OAAO,gBAEDrI,EAAMkB,KAAKyI,qBACfC,QAAS,OAGV,OAAO1I,KAAKW,OAAO2E,QAClB9E,KAAKR,OAIRgH,mBAAoB,WAEnB,OAAO,WAEN,IAAI1E,QAAQ,SAASC,GACpB,IAAKvC,KAAK6H,aACV,CACC7H,KAAK6H,aAAehJ,EAAO,aAC3BmB,KAAKyI,oBAAsB5J,EAAO,OACjC8J,OAAQ7J,MAAO,kDAEhBkB,KAAKyI,oBAAoBG,YAAY5I,KAAK6H,cAC1C7H,KAAKc,QAAQ+H,UAAY,GACzB7I,KAAKc,QAAQ8H,YAAY5I,KAAKyI,qBAC9BzI,KAAK+G,oBAEL+B,sBAAsB,WACrB,IAAIC,EAAiB/I,KAAKc,QAAQkI,YAAc,QAE3ClK,EAAMkB,KAAK6H,cACfnF,MAAS,SACTuG,OAAU,iCAAmCF,EAAe,IAAM,IAAK,KACvEG,UAAa,SAAUH,EAAe,IAAM,kBAC5CI,mBAAoB,WACpBC,OAAU,UAEV5I,KAAKR,OAGRuC,EAAQvC,KAAK6H,eACZrH,KAAKR,QACNQ,KAAKR,OASRwI,aAAc,SAAS5I,EAAI8G,GAE1B,GAAIA,EAAM2C,UACV,MACMjL,GAAGG,QAAQ6E,QAAQhC,cACtBkI,WAAW5D,UAAW1F,KAAK2G,uBAAuB3D,KAClDM,KAAK,SAASiG,GACd,IAAIC,EAAeD,EAAOE,KAAK,SAASC,GACvC,OAAOA,EAAM9J,KAAOA,IAGrB,GAAI4J,EACJ,CACCxJ,KAAK2J,UACJC,KAAMvK,EACNO,GAAI4J,EAAa5J,GACjBiK,KAAML,EAAaK,KACnBC,MAAON,EAAaM,UAGrBtJ,KAAKR,SAUVqF,eAAgB,SAASzF,EAAIiK,GAE5B7J,KAAK2J,UAAUC,KAAMxK,EAAWQ,GAAIA,EAAIiK,KAAMA,KAS/CE,cAAe,SAASnK,EAAIiK,GAE3B7J,KAAK2J,UAAUC,KAAMtK,EAAaM,GAAI,IAAMA,EAAIiK,KAAMA,KAUvD7F,YAAa,SAASvB,EAAQwB,EAAayC,GAE1C1G,KAAK4G,eAAelD,QAAQ,SAASyC,GACpC,GACCA,EAAOjG,SAAWwG,EAAMnC,iBAErBmC,EAAM7F,QACLsF,EAAOjG,SAAWwG,EAAM7F,OAAOmJ,QAAQ,sBAG5C,CACChK,KAAK6D,kBAAoBsC,EACzBA,EAAOU,eAGR,CACCV,EAAOW,eAEN9G,MAEHA,KAAKc,QAAQ+H,UAAY,GACzB7I,KAAKyB,aAELrD,GAAGG,QAAQ6E,QAAQhC,cACjBgD,aAAa3B,OAAQA,IACrBa,KAAK,SAASe,GACd,IAAIG,EAAYxE,KAAKgE,YAAYxD,KAAKR,KAAMyC,EAAQwB,EAAayC,GACjE1G,KAAKyE,WACJ,IAAIrG,GAAGG,QAAQiB,GAAGkF,KAAKC,aACtBlC,OAAQA,EACRmC,OAAQ5E,KAAK6E,YAAYrE,KAAKR,KAAMwE,EAAW/B,MAGjD4B,EAASX,QAAQ,SAASoB,GACzB,IAAKA,EAAQC,SAAYD,EAAQC,SAAWd,EAC5C,CACCjE,KAAKyE,WAAWzE,KAAKiK,qBAAqBnF,MAEzC9E,MACHA,KAAKW,OAAO2E,QACX9E,KAAKR,QAGT6E,YAAa,SAASqF,EAAUzH,GAE/BzC,KAAKiB,MAAQ,IAAI7C,GAAG8C,MAAMC,YAC1B,IAAIgJ,EAAU/L,GAAGG,QAAQ6E,QAAQhC,cACjC+I,EAAQlJ,MAAMmJ,OAAO,aAAa3H,EAAO,KACzC0H,EAAQlJ,MAAMmJ,OAAO,cAAc3H,EAAO,MAC1C0H,EAAQlJ,MAAMmJ,OAAO,WAAW3H,GAChCyH,KAaDD,qBAAsB,SAASrI,GAE9B,OAAO,IAAIxD,GAAGG,QAAQiB,GAAGkF,KAAKM,oBAC7BhD,MAAOJ,EAAQkC,MACfmB,YAAarD,EAAQsD,YACrBC,QAASvD,EAAQwD,QACjBrB,QAAS/D,KAAKqF,eAAe7E,KAAKR,KAAM4B,EAAQoB,GAAIpB,EAAQkC,UAU9DuG,mBAAoB,SAASzI,GAE5B,OAAO,IAAIxD,GAAGG,QAAQiB,GAAGkF,KAAK4F,kBAC7BxJ,QAASc,EAAQhC,GACjBmE,QAAS/D,KAAKwI,aAAahI,KAAKR,KAAM4B,EAAQhC,GAAIgC,EAAQiI,KAAMjI,EAAQkI,UAS1ES,WAAY,SAAS7E,EAAW9D,GAE/B,IAAI4I,EAAMC,KAAKC,WAAW,aAAehF,EAAW9D,IAEpD,OAAO5B,KAAKiB,MAAM0J,SAASH,EAAK,WAC/B,OAAOpM,GAAGG,QAAQ6E,QAAQhC,cACxBwJ,OAAO,oBAAqBtD,QAC3B1E,QAASI,GAAI0C,GACbmF,YAAa,QAEdvH,KAAK,SAASwH,GACd,OAAOA,GACNtK,KAAKR,QACPQ,KAAKR,QAGR+K,SAAU,SAASnL,GAElB,IAAIoL,EAAW,YAAcpL,EAE7B,OAAOI,KAAKiB,MAAM0J,SAASK,EAAU,WACpC,OAAO5M,GAAGG,QAAQ6E,QAAQhC,cACxBwJ,OAAO,kBACPlB,MAAO9J,EACP0H,QACC2D,UAAW,QAGZ3H,KAAK,SAASwH,GACd,OAAOA,GACNtK,KAAKR,QACPQ,KAAKR,QAGR2J,SAAU,SAASuB,GAElBlL,KAAKe,eAAemK,GACpBlL,KAAKsF,QAGNA,KAAM,WAELtF,KAAK6H,aAAe,KACpB,OAAOzJ,GAAGG,QAAQiB,GAAGE,MAAMI,QAAQwB,UAAUgE,KAAKxD,KAAK9B,SAnqBzD","file":"url_list.map.js"}