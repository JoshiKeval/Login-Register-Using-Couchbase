const couchbase = require("couchbase");

const cluster = new couchbase.Cluster('localhost',
                {
                    username: "Administrator",
                    password: "123456"
                });
var bucket = cluster.bucket("registerbucket");
const defaultScope = bucket.scope('_default');
const profileCollection = defaultScope.collection('profile')

module.exports = { cluster, profileCollection };