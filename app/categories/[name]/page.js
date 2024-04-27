import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/docs-utils";

const CategoryPage = ({ params: { name } }) => {
  const notes = getDocuments();
  const matchedCategories = getDocumentsByCategory(notes, name);
  return;
  <ContentDisplay id={matchedCategories[0].id} />;
};

export default CategoryPage;
