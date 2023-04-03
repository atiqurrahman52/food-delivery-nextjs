import RecipesDetailsBanner from '@/components/recipesDetails/RecipesDetailsBanner';
import RecipesIntroductionAndConclusion from '@/components/recipesDetails/RecipesIntroductionAndConclusion';
import RelatedRecipes from '@/components/recipesDetails/RelatedRecipes';
import { recipesPostData } from '@/data/recipes/recipesPostData';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const recipesDetails = () => {0
    const router = useRouter()
  const { id } = router.query

  const singleRecipe = recipesPostData?.find((item) => item.id === parseInt(id))

    return (
        <div>
            <Head>
                <title> Recipes Details </title>
            </Head>
            <RecipesDetailsBanner singleRecipe={singleRecipe} />
            <RecipesIntroductionAndConclusion />
            <RelatedRecipes />
        </div>
    );
};

export default recipesDetails;