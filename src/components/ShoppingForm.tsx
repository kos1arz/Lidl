import React from "react";

type ShoppingFormProps = {
    addButton: (element: string) => void,
}

type ShoppingFormState = {
    inputValue: string,
}

export class ShoppingForm extends React.Component<ShoppingFormProps, ShoppingFormState> {

    state: ShoppingFormState = {
        inputValue: '',
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            inputValue: event.currentTarget.value,
        });
    }

    private handleOnSubmitForm = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        this.props.addButton(this.state.inputValue);
        this.setState({
            inputValue: '',
        })
    }

    render() {
        return (
            <>
            <form 
                onSubmit={this.handleOnSubmitForm} 
            >
                <div className="input-group mt-3 mb-3 justify-content-center">
                    <input 
                        type="text" 
                        value={this.state.inputValue} 
                        onChange={this.handleChange} 
                        placeholder="Wpisz produkt"
                    />
                    <button 
                        type="submit" 
                        className="btn btn-success d-flex justify-content-center align-items-center p-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                        </svg>
                    </button>
                </div>
            </form>
            </>
        );
    }
}
