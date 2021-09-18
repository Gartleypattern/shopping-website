import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/pages/home';
import {About} from './components/pages/about';
import {Contact} from './components/pages/contact';
import {Blog} from './components/pages/blog';
import {Shop} from './components/pages/shop';
import { Register } from './components/pages/register';
import {resetPassword} from './components/pages/reset-password';
import {TenFactsAboutInstagram} from './components/posts/socialNetwork/tenFactsAboutInstagram';
import { NotFound } from './components/pages/404';
import { Microphones } from './components/posts/socialNetwork/microphones';
import { BeFamiliarWithmics } from './components/posts/socialNetwork/beFamiliarWithmics';
import { IncreaseSales } from './components/posts/socialNetwork/increaseSales';
import { StartBusines } from './components/posts/socialNetwork/startBusiness';
import { GoogleRanking } from './components/posts/socialNetwork/googleRanking';
import { FiveSuccessSecrete } from './components/posts/socialNetwork/fiveSuccessSecrete';
import { KasboKarHaminAst } from './components/products/kasboKarHaminAst';
import {PopupMarketingMovie} from './components/products/popupMarketingMovie';
import {QuizMarketing} from './components/products/quizMarketing';
import {BuildBusiness} from './components/products/buildBusiness';
import { MakeContent } from './components/products/makeContent';
import { ThirdParty } from './components/products/thirdParty';
import { WebinarChecklist } from './components/products/webinarChecklist';
import { ArticleChecklist } from './components/products/articleChecklist';
import ScrollToTop from './components/scroll/scroll';
import './App.scss';


function App() {
  return (
    <>
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/blog' component={Blog} />
                <Route path='/shop' component={Shop} />
                <Route path='/register' component={Register} />
                <Route path='/reset-password' component={resetPassword} />
                <Route path='/10 fact about instagram algoritm' component={TenFactsAboutInstagram} />
                <Route path='/7 نکته در مورد میکروفن‌های Rode Wireless GO II' component={Microphones} />
                <Route path='/آشنایی با انواع الگوهای قطبی میکروفن‌ها' component={BeFamiliarWithmics} />
                <Route path='/افزایش فروش' component={IncreaseSales} />
                <Route path='/راه اندازی کسب و کار' component={StartBusines} />
                <Route path='/رتبه بالا در گوگل' component={GoogleRanking} />
                <Route path='/پنچ راز موفقیت' component={FiveSuccessSecrete} />
                <Route path='/کتاب کسب و کار همین است' component={KasboKarHaminAst} />
                <Route path='/فیلم پاپ آپ مارکتینگ' component={PopupMarketingMovie} />
                <Route path='/فیلم کوئیز مارکتینگ' component={QuizMarketing} />
                <Route path='/بازسازی کسب و کار' component={BuildBusiness} />
                <Route path='/تولید سریع محتوا' component={MakeContent} />
                <Route path='/فیلم سومین همایش مدرسان مرجع' component={ThirdParty} />
                <Route path='/چک لیست وبینار' component={WebinarChecklist} />
                <Route path='/چک لیست مقاله' component={ArticleChecklist} />
                <Route path='*' component={NotFound} />
            </Switch>
          </Router>
    </>
  );
};

export default App;
