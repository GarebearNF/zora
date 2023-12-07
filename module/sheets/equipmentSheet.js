export default class ZItemSheet extends ItemSheet{
    get template(){
        return `systems/zora/templates/sheets/${this.item.data.type}-sheet.html`;

    }
}