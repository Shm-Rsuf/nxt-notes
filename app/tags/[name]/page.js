import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTags } from "@/utils/docs-utils";

const TagsPage = ({ params: { name } }) => {
  const notes = getDocuments();
  const matchedDocuments = getDocumentsByTags(notes, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default TagsPage;
