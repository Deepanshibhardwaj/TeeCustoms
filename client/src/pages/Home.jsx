import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    // Additional animations
    const textAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const buttonAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }
    };

    const imageAnimation = {
        hidden: { opacity: 0, rotate: -45 },
        visible: { opacity: 1, rotate: 0, transition: { duration: 0.7 } }
    };

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    
                        <img 
                            src='./logo.png.jpg'
                            alt="logo"
                            className='w-16 h-16 object-contain' // Increased size for better visibility
                        />
                   
                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <motion.h1 
                                className="head-text"
                                initial="hidden"
                                animate="visible"
                                variants={textAnimation}
                            >
                                Uniquely <br className="xl:block hidden"/>  You.
                            </motion.h1>
                        </motion.div>
                        <motion.div
                            {...headContainerAnimation}
                            className='flex flex-col gap-5'
                        >
                            <motion.p 
                                className="max-w-md font-normal text-gray-700 text-base"
                                initial="hidden"
                                animate="visible"
                                variants={textAnimation}
                            >
                                Create your unique and exclusive shirt with our
                                brand-new 3D customization tool. <strong>Unleash your
                                imagination</strong>{" "}
                                and define your own style.
                            </motion.p>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={buttonAnimation}
                            >
                                <CustomButton
                                    type="filled"
                                    title="Customize It"
                                    handleClick={() => state.intro = false}
                                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}

export default Home;
