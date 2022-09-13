import { observer } from "mobx-react-lite";
import { action } from "mobx";

const Pagination = observer(({ allBrands, brandsPerPage, setBrandPage, allModels, modelsPerPage, setModelPage }) => {
    const brandPages = [];
    for (let i = 1; i <= allBrands/brandsPerPage; i++) {
        brandPages.push(i);
    }
    const modelPages = [];
    for (let i = 1; i <= allModels/modelsPerPage; i++) {
        modelPages.push(i);
    }
    return (
        <div id="page-wrapper">
            {brandPages.map(num => {
                return (
                    <a key={num} id="page-link" href="#!" onClick={action(() => setBrandPage(num))}>{num}</a>
                )
            })}
            {modelPages.map(num => {
                return (
                    <a key={num} id="page-link" href="#!" onClick={action(() => setModelPage(num))}>{num}</a>
                )
            })}
        </div>
    )
})

export default Pagination