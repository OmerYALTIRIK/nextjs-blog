import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../../components/Layout";
import styled from "styled-components";

const BlogDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  box-sizing: border-box;
`;

const BlogWrapper = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 10px;
`;

export default ({ posts }) => {
  return (
    <Layout title="Blog">
      Burada yazılar yer alacak
      <BlogWrapper>
        {posts.map((post) => {
          const { slug, frontmatter } = post;
          const { title, author, category, date, bannerImage, tags } = frontmatter;
          return (
            <article key={title}>
              <Link href={`/blog/${slug}`}>
                <h1>{title}</h1>
              </Link>
              <h3>{author}</h3>
              <h3>{date}</h3>
            </article>
          );
        })}
      </BlogWrapper>
    </Layout>
  );
};

export async function getServerSideProps() { // getStaticProps yerine getServerSideProps kullanıldı SSR için.
  const files = fs.readdirSync("posts"); // posts klasöründeki dosyaları oku ve files değişkenine ata. (Array)
  const posts = files.map((fileName) => { // files array'indeki her bir dosya için aşağıdaki işlemleri yap.
    const slug = fileName.replace(".md", ""); // dosya adından .md uzantısını kaldır ve slug değişkenine ata.
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8"); // posts klasöründeki dosyayı oku ve 
    //readFile değişkenine ata. (String) (utf-8 ile türkçe karakter sorunu çözüldü) burada readFileSync'de sync kısmı önemli. 
    //Çünkü async kullanırsak dosyaları okumadan işlemlere devam eder ve hata alırız.
    const { data: frontmatter } = matter(readFile); // readFile değişkenindeki dosyanın frontmatter kısmını al ve frontmatter değişkenine ata.
    return { // posts array'ine aşağıdaki objeyi ekle.
      slug, // slug değişkenini ekle. (slug: slug, kısaltılmış hali)
      frontmatter, // frontmatter değişkenini ekle. (frontmatter: frontmatter, kısaltılmış hali)
    };
  });
  return { // getStaticProps'ta olduğu gibi props döndür.
    props: { // props objesi döndür.
      posts, // posts array'ini döndür.
    },
  };
}
`yukarıdaki kodlarda node.js'in fs ve matter modüllerini kullandık. fs ile dosya okuma ve yazma işlemleri yapabiliyoruz. 
  matter ile de dosyaların frontmatter kısmını okuyabiliyoruz. (frontmatter kısmı dosyaların başında yer alan ve dosya 
  hakkında bilgi veren kısım. Örneğin: title, author, date, category, tags, bannerImage gibi bilgileri içeriyor.) 
  fs ve matter modüllerini kullanarak posts klasöründeki dosyaları okuyup, frontmatter kısmını alıp, posts array'ine ekledik. 
  Daha sonra da posts array'ini props olarak döndürdük. Böylece posts array'ini blog sayfasında kullanabileceğiz.`

