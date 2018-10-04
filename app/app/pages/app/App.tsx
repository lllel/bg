import * as React from "react";
import "./App.scss";
import {InputText} from "../../../../common/components/input_text/InputText";
import {FormContainer} from "../../../../common/components/form_container/FormContainer";
import Button from "../../../../common/components/button/Button";

interface IProps {
}

interface IState {
    bgColorFirst: string;
    bgColorSecond: string;
}

export default class App extends React.Component<IProps, IState> {
    formRef: FormContainer;

    constructor(props) {
        super(props);

        this.state = {
          bgColorFirst: '',
          bgColorSecond: ''
        };

        this.onInputClick = this.onInputClick.bind(this);
    }

    onInputClick() {
        const values = this.formRef.getValue();

        this.setState({bgColorFirst: values['bgFirst'], bgColorSecond: values['bgSecond']});
    }

    render() {
        const style = {background: `linear-gradient(${this.state.bgColorFirst}, ${this.state.bgColorSecond})`, height: '100%'};

        return (
            <div style={style}>
                <FormContainer ref={(r) => this.formRef = r}>
                    <InputText name={'bgFirst'} className={'bg-input'} placeholder={'Введите первый цвет'}/>
                    <InputText name={'bgSecond'} className={'bg-input'} placeholder={'Введите второй цвет'}/>
                </FormContainer>
                <Button onClick={this.onInputClick}>Go</Button>
            </div>
        );
    }
}
