const admin = require('firebase-admin');

const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
if (!raw) throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON secret is required.');

admin.initializeApp({ credential: admin.credential.cert(JSON.parse(raw)) });
const db = admin.firestore();

(async () => {
  const snapshots = await db.collection('portfolioViews').get();
  for (let start = 0; start < snapshots.docs.length; start += 450) {
    const batch = db.batch();
    snapshots.docs.slice(start, start + 450).forEach((doc) => batch.set(doc.ref, { imageViews: 0 }, { merge: true }));
    await batch.commit();
  }
  console.log(`Reset ${snapshots.size} image view counter(s).`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
