/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        classes: allStrapiClassList {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
        students: allStrapiNewStudent {
          edges {
            node {
              strapiId
              nick_name
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create pages for classes.
  const classes = result.data.classes.edges;
  const students = result.data.students.edges;

  const ClassTemplate = require.resolve("./src/templates/class.js");

  classes.forEach((classlist, index) => {
    createPage({
      path: `/class/${classlist.node.slug}`,
      component: ClassTemplate,
      context: {
        slug: classlist.node.slug,
      },
    });
  });

const StudentTemplate = require.resolve("./src/templates/student.js");

students.forEach((studentlist, index) => {
  createPage({
    path: `/student/${studentlist.node.nick_name}`,
    component: StudentTemplate,
    context: {
      nick_name: studentlist.node.nick_name,
    },
  });
});
};

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const crypto = require(`crypto`);

  if (node.internal.type === "StrapiClassList") {
    const newNode = {
      id: createNodeId(`StrapiClassListContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiClassListContent",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.content || " ")
          .digest("hex"),
      },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};