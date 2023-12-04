'use client'
import { CardBlog, CardBlogProps } from './CardBlog';

interface BlogProps {
    cardBlogList: CardBlogProps[];
    onClick?: () => void;
}

const Blog = ({ cardBlogList }: BlogProps) => {
    return (
        <>
            <div className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-32">
                <div>
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-14 max-w-screen-sm text-center lg:mb-20">
                                <div className="mb-2 block text-lg font-semibold text-primary">
                                    Our Blogs
                                </div>
                                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-4xl">
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
                            cardBlogList.map((cardBlog, index) => (
                                <div key={index} className="md:w-1/3">
                                    <CardBlog
                                        width={cardBlog.width}
                                        date={cardBlog.date}
                                        cardTitle={cardBlog.cardTitle}
                                        cardDescription={cardBlog.cardDescription}
                                        image={cardBlog.image}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export type {
    BlogProps
}

export {
    Blog
}

export default Blog;