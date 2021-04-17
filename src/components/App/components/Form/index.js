import translate from '../../../i18n/translate';
import {FormattedMessage} from 'react-intl';

const Form = () => {
    return (
        <form>
            <FormattedMessage id='form.name.placeholder'>
                {placeholder =>  <input type='text' name='name' placeholder={placeholder}/>}
            </FormattedMessage>
            {/* <input type='text' name='name' placeholder={translate('form.name.placeholder')}/> */}
        </form>
    )
}

export default Form;