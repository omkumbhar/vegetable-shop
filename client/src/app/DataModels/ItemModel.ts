import { v4 as uuid4 } from 'uuid';
export class ItemModel {
  public itemId: string;
  constructor(
    public itemName: string,
    public itemType: string,
    public itemQuantity: number,
    public itemGroup: number,
    public itemPrice: number
  ) {
    this.itemId = uuid4();
  }
}
