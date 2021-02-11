/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      classes: allStrapiClassList {
        edges {
          node {
            slug
            strapiId
          }
        }
      }
      students: allStrapiNewStudent {
        edges {
          node {
            nick_name
          }
        }
      }
      purchases: allStrapiPurchase {
        edges {
          node {
            Student {
              nick_name
            }
          }
        }
      }
      attendance: allStrapiAttendanceRecord {
        edges {
          node {
            strapiId
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create pages for classes.
  const classes = result.data.classes.edges;
  const students = result.data.students.edges;
  const purchases = result.data.purchases.edges;
  const attendance = result.data.attendance.edges;

  // New page Components
  // Dashboard

  classes.forEach(dash => {
    createPage({
      path: `/my-dashboard`,
      component: require.resolve("./src/templates/dashboard.js"),
      context: {
        slug: dash.node.slug,
      },
    });
  });

  // Classes

  classes.forEach(classlist => {
    createPage({
      path: `/classes`,
      component: require.resolve("./src/templates/classes.js"),
      context: {
        slug: classlist.node.slug,
      },
    });
  });

  classes.forEach(classdesc => {
    createPage({
      path: `/class/${classdesc.node.slug}`,
      component: require.resolve("./src/templates/class.js"),
      context: {
        strapiId: classdesc.node.strapiId,
      },
    });
  });

  //Students

  students.forEach(students => {
    createPage({
      path: `/student/${students.node.nick_name}`,
      component: require.resolve("./src/templates/student.js"),
      context: {
        nick_name: students.node.nick_name,
      },
    });
  });

  students.forEach(studentlist => {
    createPage({
      path: `/students`,
      component: require.resolve("./src/templates/students.js"),
      context: {
        nick_name: studentlist.node.nick_name,
      },
    });
  });

  // Purchases

  purchases.forEach(purchasehist => {
    createPage({
      path: `/purchase-history/${purchasehist.node.Student.nick_name}`,
      component: require.resolve("./src/templates/purchase_hist.js"),
      context: {
        nick_name: purchasehist.node.Student.nick_name,
      },
    });
  });

  // Attendance

  attendance.forEach(attendance => {
    createPage({
      path: `/attendance/${attendance.node.strapiId}`,
      component: require.resolve("./src/templates/class_attendance_hist.js"),
      context: {
        strapiId: attendance.node.strapiId,
      },
    });
  });
  
};


module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const crypto = require(`crypto`);

  if (node.internal.type === "strapiClassList" ) {
    const newNode = {
      id: createNodeId(`StrapiContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiContent",
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