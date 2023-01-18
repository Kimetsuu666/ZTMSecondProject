import { BackgroundImage, Body, DirectoryItemContainer } from './DirectoryItemStyle';
import { useNavigate } from 'react-router-dom';

export function DirectoryItem({ category }) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(category.route);
    }

    return (
        <DirectoryItemContainer onClick={handleNavigate}>
            <BackgroundImage imageUrl={category.imageUrl}/>
            <Body>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
}
