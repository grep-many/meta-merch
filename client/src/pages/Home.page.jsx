import { motion, AnimatePresence } from "motion/react";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "@/config/motion";
import state from "@/store";
import { Button } from "@/components";

const Home = () => {
  const { intro } = useSnapshot(state);

  return (
    <AnimatePresence>
      {intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="/threejs.png" alt="logo" className="size-8 object-contain" />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="max-xl:hidden" />
                DO It.
              </h1>
            </motion.div>
            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-md text-base font-normal text-gray-600">
                Create your unique and exclusive shirt with our brand-new 3D customization tool.{" "}
                <strong>Unleash your imagination</strong> and define your own style.
              </p>
              <Button
                variant="filled"
                onClick={() => (state.intro = false)}
                className="w-fit px-4 py-2.5 text-sm font-bold"
              >
                Customize it
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
