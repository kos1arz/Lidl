import React, { MouseEventHandler } from "react";
import { CreateGuid } from "../util/CreateGuid";
import { OrderListType } from "./OrderListType";
import { ShoppingForm } from "./ShoppingForm";
import { ShoppingList } from "./ShoppingList";

type ShoppingProps = {}

type ShoppingState = {
    orderList: Array<OrderListType>;
}

export class Shopping extends React.Component<ShoppingProps, ShoppingState> {

    state: ShoppingState = {
        orderList: [],
    }

    private addItemToList = (element: string): void => {
        if(element.length > 0) {
            const newElementList = this.state.orderList;
            newElementList.push({
                name: element,
                guid: CreateGuid.uuidv4(),
            });
            this.setState({
                orderList: newElementList,
            });
        }
    }

    private deleteItem = (guid: string): void => {
        let listItem = this.state.orderList;
        listItem.forEach( (item, index) => {
            if(item.guid === guid) listItem.splice(index,1);
          });
          this.setState({
            orderList: listItem,
        });
    }

    private deleteAllItem = (): void => {
        this.setState({
            orderList: [],
        });
    }

    render() {
        return (
            <>
                <div className="row justify-content-end">
                    <button 
                        onClick={this.deleteAllItem}
                        className="btn btn-danger" 
                        type="button"
                    >
                        Usuń wszystkie
                    </button>
                </div>
                <div className="row">
                    <ShoppingForm addButton={this.addItemToList}/>
                </div>
                <div className="mt-3 row">
                    <ShoppingList 
                        orderList={this.state.orderList}
                        deleteItem={this.deleteItem}
                    />
                </div>
            </>
        );
    }
}
