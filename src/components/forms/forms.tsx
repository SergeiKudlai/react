import { Component, FormEvent, createRef, ChangeEvent } from 'react';
import { setValueForms } from '../../ts/utils';
import { form__name } from '../../ts/enum';

export class Forms extends Component {
    public formText: { current: null };
    public formDate: { current: null };
    public formSelect: { current: null };
    public formCheckBoxEmail: { current: null };
    public formCheckBoxPersonalData: { current: null };
    public state: {
        text: string;
        date: string;
        select: string;
        checkedEmail: boolean;
        checkedPersonalData: boolean;
    };

    constructor(props: never) {
        super(props);
        this.formText = createRef();
        this.formDate = createRef();
        this.formSelect = createRef();
        this.formCheckBoxEmail = createRef();
        this.formCheckBoxPersonalData = createRef();
        this.state = {
            text: '',
            date: '',
            select: '',
            checkedEmail: false,
            checkedPersonalData: false,
        };
    }

    formsSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (
            this.formText.current &&
            this.formDate.current &&
            this.formSelect.current &&
            this.formCheckBoxEmail.current &&
            this.formCheckBoxPersonalData.current
        ) {
            const text = this.formText.current as HTMLInputElement;
            const date = this.formDate.current as HTMLInputElement;
            const select = this.formSelect.current as HTMLSelectElement;
            const checkBoxEmail = this.formCheckBoxEmail.current as HTMLInputElement;
            const checkBoxPersonaData = this.formCheckBoxPersonalData.current as HTMLInputElement;

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const data = {
                text: text.value,
                date: date.value,
                select: select.value,
                checkBoxEmail: checkBoxEmail.checked ? checkBoxEmail.value : '',
                checkBoxPersonalData: checkBoxPersonaData.checked ? checkBoxPersonaData.value : '',
            };

            this.setState({
                text: '',
                date: '',
                select: '',
                checkedEmail: false,
                checkedPersonalData: false,
            });
        }
    };

    updateDataInput = (e: ChangeEvent) => {
        const data = e.target as HTMLInputElement;
        const { name, value } = setValueForms(data);
        name === form__name.text && this.setState({ text: value });
        name === form__name.date && this.setState({ date: value });
        name === form__name.language && this.setState({ select: value });
        if (name === form__name.checkboxEmail) {
            data.checked ? this.setState({ checkedEmail: true }) : this.setState({ checkedEmail: false });
        }

        if (name === form__name.checkboxPersonalData) {
            data.checked ? this.setState({ checkedPersonalData: true }) : this.setState({ checkedPersonalData: false });
        }
    };

    render() {
        return (
            <form className="form__inner" onSubmit={this.formsSubmit}>
                <label className="form__box" htmlFor="">
                    Text
                    <input
                        className="form__data"
                        type="text"
                        placeholder="Enter Text"
                        name="text"
                        onChange={this.updateDataInput}
                        ref={this.formText}
                        value={this.state.text}
                    />
                </label>

                <label className="form__box" htmlFor="date">
                    Date
                    <input
                        className="form__data"
                        type="date"
                        id="date"
                        name="date"
                        ref={this.formDate}
                        value={this.state.date}
                        onChange={this.updateDataInput}
                    />
                </label>

                <label className="form__box" htmlFor="language">
                    Select your like language pragramming
                    <select
                        className="form__data"
                        name="language"
                        id="language"
                        value={this.state.select}
                        onChange={this.updateDataInput}
                        ref={this.formSelect}
                    >
                        <option value="javaScript">Java Script</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="php">PHP</option>
                    </select>
                </label>

                <div className="form__box">
                    <label className="form__box-inner">
                        <input
                            className="form__data"
                            type="checkbox"
                            id="checkbox"
                            name="checkedPersonalData"
                            value="i consent to my personal data"
                            checked={this.state.checkedPersonalData}
                            onChange={this.updateDataInput}
                            ref={this.formCheckBoxPersonalData}
                        />
                        <span>I consent to my personal data</span>
                    </label>

                    <label className="form__box-inner">
                        <input
                            className="form__data"
                            type="checkbox"
                            id="checkbox"
                            name="checkedEmail"
                            value="send email notification"
                            checked={this.state.checkedEmail}
                            onChange={this.updateDataInput}
                            ref={this.formCheckBoxEmail}
                        />
                        <span>Send email notification</span>
                    </label>
                </div>

                <button className="form__btn" type="submit">
                    Отправить
                </button>
            </form>
        );
    }
}
