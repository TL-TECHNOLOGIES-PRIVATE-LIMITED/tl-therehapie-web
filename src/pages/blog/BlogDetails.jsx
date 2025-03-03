import { useLocation } from "react-router-dom";

export const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <Layout breadcrumbTitle={"Blog Not Found"} breadcrumbSubtitle={"Blog Details"}>
        <BlogLayout>
          <p>Blog not found. Please go back to the blog page.</p>
        </BlogLayout>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbTitle={blog.title} breadcrumbSubtitle={"Blog Details"}>
      <BlogLayout>
        <div className="td-postbox-wrapper td-postbox-wrapper-space td-postbox-wrapper-space-2">
          <div className="td-postbox-item mb-60">
            {/* Blog Cover Image */}
            <div className="td-postbox-thumb mb-60">
              <img className="w-100" src={blog.src} alt="blog cover" />
            </div>

            {/* Blog Content */}
            <div className="td-postbox-content-2">
              <h2 className="mb-3">{blog.title}</h2>
              <p><strong>By {blog.author} | {blog.date}</strong></p>
              <p className="mb-4">{blog.introduction}</p>

              <h3 className="mb-3">Key Points:</h3>
              <ul>
                {blog.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <h3 className="mt-4">Conclusion</h3>
              <p>{blog.conclusion}</p>
            </div>
          </div>
        </div>
      </BlogLayout>
    </Layout>
  );
};
