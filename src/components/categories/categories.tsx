import '../categories/categories.css';
import coldFlu from '../../assets/categories/cold_flu.png';
import digest from '../../assets/categories/digestive_health.png';
import homeTest from '../../assets/categories/home_tests.png';
import diabetes from '../../assets/categories/diabetes.png';
import pain from '../../assets/categories/pain_fever.png';
import weight from '../../assets/categories/weight_loss.png';
import vitamines from '../../assets/categories/vitamines.png';

const Categories = () => {
    return (
        <div className="components">
            <img src={coldFlu} className="sneeze"></img>
            <img src={digest} className="gut"></img>
            <img src={homeTest} className="home_test"></img>
            <img src={diabetes} className="diabetes"></img>
            <img src={pain} className="pain_fever"></img>
            <img src={weight} className="weight_loss"></img>
            <img src={vitamines} className="vitamines"></img>
        </div>
    );
};

export default Categories;
