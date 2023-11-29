import React from 'react';
import { BlogCard, BlogCardProps } from './BlogCard';

interface BlogProps {
    blogCardList: BlogCardProps[];
    onClick?: () => void;
}

export const Blog = ({ blogCardList }: BlogProps) => {
    return (
        <>
            <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span className="mb-2 block text-lg font-semibold text-primary">
                                    Our Blogs
                                </span>
                                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                    Our Recent News
                                </h2>
                                <p className="text-base text-body-color dark:text-dark-6">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                        {
                            blogCardList.map((blogCard, index) => (
                                <div key={index} className="md:w-1/3">
                                    <BlogCard
                                        width={blogCard.width}
                                        date={blogCard.date}
                                        cardTitle={blogCard.cardTitle}
                                        cardDescription={blogCard.cardDescription}
                                        image={blogCard.image}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};