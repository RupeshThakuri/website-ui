import { motion } from 'framer-motion';
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="pt-8 md:pt-12 lg:pt-16 relative overflow-hidden border-b-4 border-gray-200">
      <div className="container mx-auto relative z-10">
        <SectionTitle
          title="Our Organization Process Workflow"
          paragraph="Since 2015, our organization team accelerates digital transformation for clients across industries. We employ a streamlined four-step process, ensuring swift, impactful solutions."
          center={true}
          className="custom-class"
          mb="8"
          width="full"
        />
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {['Analyze', 'Strategize', 'Implement', 'Monitor'].map((step, index) => (
            <motion.div
              className="relative flex flex-col items-center text-center p-4 md:p-8"
              key={index}
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.3 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-2 rounded-full bg-primary text-white flex items-center justify-center text-lg md:text-xl">
                {index + 1}
              </div>
              <h3 className="font-bold text-lg md:text-xl text-orange-500">{step}</h3>
              <p className="mt-2 text-sm md:text-base">
                {index === 0 && 'We analyze business IT needs, key pain areas, digitalization goals, and objectives.'}
                {index === 1 && 'We identify areas for improvement and strategize to achieve desired goals.'}
                {index === 2 && 'We implement the solutions and ensure proper integration with existing IT infrastructure.'}
                {index === 3 && 'We monitor the performance of IT solutions and make changes to improve efficiency.'}
              </p>
              {index < 3 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 transform -translate-y-1/2 right-0 w-1 h-full bg-primary"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.3 }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;











