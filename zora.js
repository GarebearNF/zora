import ZItemSheet from "./module/sheets/equipmentSheet.js";
Hooks.once("init", function(){
    console.log("test | Initializing Zora system");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("zora", ZItemSheet, {makeDefault: true});
});