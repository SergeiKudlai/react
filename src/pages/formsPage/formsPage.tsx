import { Component } from 'react';
import { IFuncProps } from '../../ts/interface';
import { title_value } from '../../ts/enum';
import './form.scss';

export class FormsPage extends Component<IFuncProps> {
    constructor(props: IFuncProps) {
        super(props);
        this.props.updateData(title_value.form);
    }

    render() {
        return (
            <section className="form section container">
                <h1 className="form__title">Forms Page</h1>
            </section>
        );
    }
}
