import { prefixed } from "@/utils/media";
import { retrieveMakePage } from "@/utils/notion/page/make";
import { SimpleGrid, Link, Center, Box, Image, Text } from "@chakra-ui/react";
import path from "path";
import slugify from "slugify";
import fs from "fs";

export default async function Page() {
  const databaseList: {
    id: string;
    title: string;
  }[] = await retrieveMakePage();
  const jsonData = databaseList.map((db) => ({
    id: db.id,
    title: db.title,
  }));

  const dirPath = path.join(process.cwd(), "src", "lib", "notion_make_list");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, "database_list.json");
  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
  return (
    <Center>
      <SimpleGrid
        columns={{ base: 1, xl: 3 }}
        spacing={8}
        mt="150px"
        w="90%"
        maxW="1172px"
      >
        {databaseList.map((db, index) => {
          const slug = slugify(db.title, {
            replacement: "-",
            lower: true,
            strict: true,
          });

          return (
            <Link
              key={db.id}
              href={`/make/${slug}`}
              _hover={{ textDecoration: "none" }}
            >
              <Box
                h="350px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Image
                  src={prefixed(`/make/make_${index}.webp`)}
                  alt={db.title}
                  width="100%"
                  height="200px"
                  objectFit="cover"
                />
                <Box p="6">
                  <Text fontWeight="bold" fontSize="xl">
                    {db.title}
                  </Text>
                </Box>
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>
    </Center>
  );
}
