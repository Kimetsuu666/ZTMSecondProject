import { CategoryItem } from '../category-item/CategoryItem';
import './directory.scss'

export function Directory({ categories }) {
    return (
        <div className='directory-container'>
            {categories.map(category =>
                <CategoryItem category={category} key={category.id} />
            )}
        </div>
    );
}
