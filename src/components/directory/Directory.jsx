import './directory.scss'
import { DirectoryItem } from '../directory-item/DirectoryItem';

export function Directory({ categories }) {
    return (
        <div className='directory-container'>
            {categories.map(category =>
                <DirectoryItem category={category} key={category.id} />
            )}
        </div>
    );
}
