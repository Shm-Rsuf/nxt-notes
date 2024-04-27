import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/docs-utils";

const AuthorPage = ({ params: { name } }) => {
  const notes = getDocuments();
  const matchedAuthor = getDocumentsByAuthor(notes, name);
  return <ContentDisplay id={matchedAuthor[0].id} />;
};

export default AuthorPage;
