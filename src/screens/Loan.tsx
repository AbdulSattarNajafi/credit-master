import LoanHeroSection from '../components/pages/loans/LoanHeroSection';
import PersonalLoan from '../components/pages/loans/PersonalLoan';
import HelpSection from '../components/pages/loans/HelpSection';
import GetLoan from '../components/pages/loans/GetLoan';
import Installment from '../components/common/Installment';
import LoanFaqSection from '../components/pages/loans/LoanFaqSection';

const Loan = () => {
    return (
        <>
            <LoanHeroSection />
            <PersonalLoan />
            <HelpSection />
            <GetLoan />
            <Installment />
            <LoanFaqSection />
        </>
    );
};

export default Loan;
