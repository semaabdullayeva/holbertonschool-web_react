import { schema, normalize } from "normalizr";

const course = new schema.Entity("courses");

const coursesNormalizer = (data) => {
  normalize(data, [course]);
};

export default coursesNormalizer;
