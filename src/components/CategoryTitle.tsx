'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from '../app/css/categorytitle.module.css'

interface CategoryTitleProps {
    categoryTitle: string;
    subCategoryTitle?: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ categoryTitle, subCategoryTitle }) => {
    const [barWidth, setBarWidth] = useState(0);
    const categoryTitleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (categoryTitleRef.current) {
            setBarWidth(categoryTitleRef.current.offsetWidth);
        }
    }, [categoryTitle]);

    return (
        <div className={styles.categorytitle}>
            <div className={styles.categorycontainer}>
                <div className={styles.title}><p ref={categoryTitleRef}>{categoryTitle}</p>
                    {subCategoryTitle && (
                        <div className={styles.subcategory}>
                            <img src="./assets/right-2-svgrepo-com.svg" alt=">" className={styles.sep}/>
                            <p>
                                {subCategoryTitle}
                            </p>
                        </div>
                )}
                </div>

                <div className={styles.bar}
                    style={{
                        width: barWidth,
                    }}
                />
            </div>
        </div>
    );
};

export default CategoryTitle;
