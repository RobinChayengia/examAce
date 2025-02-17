import { motion } from "framer-motion";
import images from "../../constants/images";

const LeaderBoard = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
            >
                <img src={images.Logo} className="w-96 h-96" />
            </motion.div>
        </div>
    )
}

export default LeaderBoard