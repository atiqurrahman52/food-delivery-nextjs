import FeaturedPostRecipes from '@/components/recipes/FeaturedPostRecipes';
import FeaturedRecipes from '@/components/recipes/FeaturedRecipes';
import RecipesBanner from '@/components/recipes/RecipesBanner';
import Newsletter from '@/components/shared/Newsletter';
import RelatedProduct from '@/components/shared/RelatedProduct';


const index = () => {
    return (
        <div>
            <RecipesBanner />
            <FeaturedRecipes />
            <FeaturedPostRecipes />
            <RelatedProduct />
            <Newsletter />
            
        </div>
    );
};

export default index;