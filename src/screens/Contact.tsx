import ContactHeroSection from '../components/pages/contact/ContactHeroSection';
import FinanceAssistant from '../components/pages/contact/FinanceAssistant';
import Installment from '../components/common/Installment';
import CustomisedLoan from '../components/pages/contact/CustomisedLoan';
import Address from '../components/pages/contact/Address';

const Contact = () => {
    return (
        <>
            <ContactHeroSection />
            <FinanceAssistant />
            <Installment />
            <CustomisedLoan />
            <Address />
        </>
    );
};

export default Contact;
