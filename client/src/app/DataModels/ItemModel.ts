export class ItemModel {
  public itemName: string;
  public itemType: string;
  public itemQuantity: string;
  public itemGroup: string;

  constructor(
    itemName: string,
    itemType: string,
    itemQuantity: string,
    itemGroup: string
  ) {
    this.itemName = itemName;
    this.itemType = itemType;
    this.itemQuantity = itemQuantity;
    this.itemGroup = itemGroup;
  }
}
