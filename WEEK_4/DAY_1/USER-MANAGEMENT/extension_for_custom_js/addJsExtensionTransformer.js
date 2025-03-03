const ts = require("typescript");

function addJsExtensionTransformer(context) {
  return (sourceFile) => {
    function visitor(node) {
      if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
        if (node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
          const moduleSpecifier = node.moduleSpecifier.text;
          if (!moduleSpecifier.endsWith(".js")) {
            const newModuleSpecifier = ts.createLiteral(
              `${moduleSpecifier}.js`
            );
            if (ts.isImportDeclaration(node)) {
              return ts.updateImportDeclaration(
                node,
                node.decorators,
                node.modifiers,
                node.importClause,
                newModuleSpecifier
              );
            } else if (ts.isExportDeclaration(node)) {
              return ts.updateExportDeclaration(
                node,
                node.decorators,
                node.modifiers,
                node.exportClause,
                newModuleSpecifier
              );
            }
          }
        }
      }
      return ts.visitEachChild(node, visitor, context);
    }
    return ts.visitNode(sourceFile, visitor);
  };
}

module.exports = addJsExtensionTransformer;
