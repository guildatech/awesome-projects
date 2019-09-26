const { promisify } = require('util');
const { readFile } = require('fs');
const metaMarked = require('new-meta-marked');

const glob = promisify(require('glob'));
const readAFile = promisify(readFile);

let renderer = new metaMarked.Renderer();
renderer.link = function(href, title, text){
  return '<a target="_blank" href="' + href + '"> ' + text + '</a>';
}

const loadProjects = async () => {
    const files = await glob('projetos/*.md');

    return await Promise.all(files.map( async (file) => {
        return readAFile(file, 'utf8')
    }));
}

const proccessProjects = async () => {
    const projectsMarkdown = await loadProjects();

    const projects = projectsMarkdown
        .map(md => metaMarked(md, { renderer: renderer }))

    return projects;
}

const getProjects = async () => {
    return await proccessProjects()
}

const getProject = (id) => {
    return proccessProjects().find(project.id === id);
}

module.exports = {
    getProjects,
    getProject
 }