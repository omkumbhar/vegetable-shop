export class ItemModel {
  constructor(
    public itemName: string,
    public itemType: string,
    public itemQuantity: number,
    public itemGroup: number,
    public itemPrice: number
  ) {}
}
