import Image from "next/image";
import React from "react";

export default function Project({ params }) {
  const { slug } = params;

  const projects = [
    {
      slug: "project-1",
      link: "https://colgate-concept-site.vercel.app/",
      title: "Colgate Demo Site",
      objectives:
        "My foremost objective is to attain mastery in CSS, honing my skills to become an expert in its implementation and leveraging its power to elevate the aesthetics and user experience of websites. Through dedicated practice and exploration, I aspire to unlock the full potential of CSS, enabling me to craft visually stunning designs and seamless layouts that captivate users and leave a lasting impression. Additionally, I am eager to delve into the unique style of companies, unraveling the essence of their brand identities and seamlessly infusing them into my design process. By doing so, I aim to create customized and impactful designs that resonate with both the company's vision and the target audience.",
      thoughts:
        "Embarking on a journey to explore the distinctive style of Colgate fills me with excitement and curiosity. By immersing myself in the Colgate brand, I anticipate unraveling the nuances of their design language and understanding the visual elements that define their identity. With a keen eye for detail, I am eager to examine their typography, color palette, and overall aesthetic, dissecting the intricacies that make their style truly unique. By grasping the essence of Colgate's design philosophy, I aim to expand my creative repertoire and gain inspiration that will enhance my own design approach. This exploration will undoubtedly broaden my understanding of how design can seamlessly blend with a brand's essence, and I look forward to the insights and growth it will bring to my craft.",
      mainImage: "/mockups/colgate1.png",
      images: [
        "/mockups/colgate1.png",
        "/mockups/colgate2.png",
        "/mockups/colgate3.png",
        "/mockups/colgate4.png",
        "/mockups/colgate5.png",
        "/mockups/colgate6.png",
        "/mockups/colgate1-m.png",
      ],
    },
    {
      slug: "project-2",
      title: "The Jewish Project",
      objectives:
        "My objective is to embark on a comprehensive exploration of AI and its vast possibilities. By delving into the intricacies of artificial intelligence, I aim to deepen my understanding of its capabilities and harness its potential to revolutionize various industries and domains. Through research, experimentation, and hands-on experience, I seek to gain insights into the cutting-edge advancements in AI technologies, such as machine learning, natural language processing, and computer vision. By doing so, I hope to unlock new horizons and discover innovative ways to leverage AI in solving complex problems and improving human lives.",
      thoughts:
        "Contemplating how an AI Rabbi would respond to inquiries fills me with intrigue and wonder. As an AI-driven language model, I recognize that an AI Rabbi would approach questions from a unique perspective, blending the wisdom of traditional rabbinic knowledge with the computational power of artificial intelligence. Imagining the possibilities, I envision an AI Rabbi offering insightful interpretations of religious texts, providing guidance on moral dilemmas, and engaging in thought-provoking discussions on faith and spirituality. The prospect of an AI Rabbi's responses encourages contemplation on the intersection of technology and religion, highlighting the potential of AI to augment and expand our understanding of diverse belief systems. Exploring how an AI Rabbi would navigate these questions fosters a deeper appreciation for the capabilities and evolving role of AI in our ever-changing world.",
      mainImage: "/mockups/jewish1.png",
      images: [
        "/mockups/jewish1.png",
        "/mockups/jewish2.png",
        "/mockups/jewish3.png",
        "/mockups/jewish4.png",
        "/mockups/jewish5.png",
        "/mockups/jewish6.png",
        "/mockups/jewish7.png",
      ],
    },
    {
      slug: "project-3",
      link: "https://segal-wines.vercel.app/",
      title: "Project 3",
      objectives:
        "My primary objective is to leverage the power of databases to create dynamic displays of various items. By integrating a database into my projects, I aim to enhance user experiences by offering personalized and interactive content. Through meticulous implementation, I strive to design efficient and optimized database structures that enable seamless retrieval and display of different items based on user preferences or specific criteria. Additionally, I am committed to ensuring that the design of these displays is responsive, adapting gracefully to different screen sizes and devices. By prioritizing responsive design principles, I aim to create user interfaces that deliver a consistent and user-friendly experience across a wide range of devices.",
      thoughts:
        "Embarking on an exploration of Segal's captivating world, I eagerly anticipate uncovering the fascinating journey from wine to design. Inspired by Segal's unique style and philosophy, I am intrigued by the parallelism between the meticulous artistry involved in winemaking and the creative process of design. Just as Segal wines embody elegance, depth, and complexity, I envision their design approach resonating with these qualities. By delving into Segal's design language, I aim to unravel the visual elements and aesthetic choices that capture the essence of their brand. This exploration offers a captivating opportunity to witness how Segal's distinct character is translated into the realm of design, providing inspiration and insights for my own creative endeavors.",
      mainImage: "/mockups/segal1.png",
      images: [
        "/mockups/segal1.png",
        "/mockups/segal2.png",

        "/mockups/segal3.png",
        "/mockups/segal4.png",
        "/mockups/segal5.png",

        "/mockups/segal6.png",
        "/mockups/segal7.png",
        "/mockups/segal8.png",

        "/mockups/segal9.png",
        "/mockups/segal1-m.png",
        "/mockups/segal2-m.png",
        "/mockups/segal3-m.png",
      ],
    },
  ];

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Loading...</div>; // Handle case where project data is not found
  }

  return (
    <div className="bg-black py-8">
      <div className="max-w-6xl px-2 py-8 mx-auto bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="p-4 w-full flex flex-col">
            <h2 className="text-4xl font-semibold mb-3">
              Project Title: {project.title}
            </h2>
            <h2 className="text-2xl font-light tracking-tight mb-2">
              Objectives
            </h2>
            <p className="text-white mb-4 font-thin md:max-w-[75%] max-w-[85%] md:mx-0 mx-auto leading-7">
              {project.objectives}
            </p>
            <h2 className="text-2xl font-light tracking-tight mb-2">
              Thoughts
            </h2>
            <p className="text-white mb-4 font-thin md:max-w-[75%] max-w-[85%] mx-auto md:mx-0 leading-7">
              {project.thoughts}
            </p>
            {project.link && (
              <div className="m-8">
                <div className="text-center">
                  <a
                    className="border border-[#ffffff85] p-5 rounded m-4 font-thin text-3xl hover:text-black hover:bg-[#ffffff85] hover:font-thin transition-all transform"
                    href={`${project.link}`}
                    target="_blank"
                  >
                    Show me the project!
                  </a>
                </div>
              </div>
            )}

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-full md:w-[75%]">
              {project.images.map((image, index) => (
                <div key={index} className="w-full border rounded p-6">
                  <img src={image} alt={`Project Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "project-1" } },
//       { params: { slug: "project-2" } },
//       { params: { slug: "project-3" } },
//       // Add more valid slugs as needed
//     ],
//     fallback: false, // Set to true if you have additional dynamic slugs
//   };
// }
