import Head from 'next/head';
import { motion } from 'framer-motion';
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home | My Next.js Website</title>
        <meta name="description" content="Welcome to my Next.js website" />
      </Head>

      {/* Animated heading and paragraph */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ textAlign: 'center', padding: '50px' }}
      >
        <h2>Welcome to My Next.js Website</h2>
        <p>This is the home page.</p>
      </motion.div>

      {/* Animated Introduction section */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        style={{ padding: '30px', textAlign: 'left', backgroundColor: '#f9f9f9', borderRadius: '8px' }}
      >
        <h2>Introduction</h2>
        <p>
          When DNA was first discovered, its only function was providing organisms the genetic material to develop, survive, and reproduce. 
          However, further research revealed that the structure and microscopic size of DNA makes it possible to use it as a building block 
          to engineer nano-structures. Since the emergence of DNA nanotechnology, scientists have continually pushed the boundaries of what 
          can be achieved at the nanoscale. DNA, with its well-known programmability and unique physical properties, has paved the way for 
          the creation of sophisticated nanomachines. Among these innovations are DNA robots, capable of performing highly specific tasks.
          Our team, the _____________________, has focused on advancing the development of these robots. While earlier models of DNA robots 
          were designed with limited functionality in terms of movement and task execution, our design aims to improve upon this by incorporating 
          enhanced movement and cargo sorting capabilities. Our goal is to refine and test this DNA robot design to boost the efficiency and speed 
          of the cargo sorting process. Additionally, we will be utilizing image-capturing techniques, previously unused in this context, to gather 
          data and further improve our model. Ultimately, we believe that continuously developing these DNA robots can unlock new applications.
        </p>
      </motion.section>
    </div>
  );
};

export default HomePage;
