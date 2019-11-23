import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import * as SimpleMDE from 'simplemde/src/js/simplemde';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {
  @ViewChild('simplemde', { static: true }) mdeEl: ElementRef<HTMLTextAreaElement>;

  private simplemde: any;

  constructor(private markdownService: MarkdownService) {
  }

  ngOnInit() {
    this.simplemde = new SimpleMDE({
      element: this.mdeEl.nativeElement,
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: false,
      },
      spellChecker: false,
      status: false,
      styleSelectedText: false,
      autoDownloadFA: false,
      toolbar: [{
        name: 'bold',
        action: SimpleMDE.toggleBold,
        className: 'fa fa-bold',
        title: 'Negrito'
      }, {
        name: 'italic',
        action: SimpleMDE.toggleItalic,
        className: 'fa fa-italic',
        title: 'Itálico'
      }, {
        name: 'strikethrough',
        action: SimpleMDE.toggleStrikethrough,
        className: 'fa fa-strikethrough',
        title: 'Tachado'
      }, '|', {
        name: 'heading',
        action: SimpleMDE.toggleHeadingSmaller,
        className: 'fa fa-header',
        title: 'Título'
      }, {
        name: 'heading-smaller',
        action: SimpleMDE.toggleHeadingSmaller,
        className: 'fa fa-header fa-header-x fa-header-smaller',
        title: 'Diminuir Título'
      }, {
        name: 'heading-bigger',
        action: SimpleMDE.toggleHeadingBigger,
        className: 'fa fa-header fa-header-x fa-header-bigger',
        title: 'Aumentar Título'
      }, '|',  {
        name: 'heading-1',
        action: SimpleMDE.toggleHeading1,
        className: 'fa fa-header fa-header-x fa-header-1',
        title: 'Título 1'
      }, {
        name: 'heading-2',
        action: SimpleMDE.toggleHeading2,
        className: 'fa fa-header fa-header-x fa-header-2',
        title: 'Título 2'
      }, {
        name: 'heading-3',
        action: SimpleMDE.toggleHeading3,
        className: 'fa fa-header fa-header-x fa-header-3',
        title: 'Título 3'
      }, '|', {
        name: 'code',
        action: SimpleMDE.toggleCodeBlock,
        className: 'fa fa-code',
        title: 'Código'
      }, {
        name: 'quote',
        action: SimpleMDE.toggleBlockquote,
        className: 'fa fa-quote-left',
        title: 'Citação'
      }, {
        name: 'unordered-list',
        action: SimpleMDE.toggleUnorderedList,
        className: 'fa fa-list-ul',
        title: 'Lista sem números'
      }, {
        name: 'ordered-list',
        action: SimpleMDE.toggleOrderedList,
        className: 'fa fa-list-ol',
        title: 'Lista numerada'
      }, '|', {
        name: 'link',
        action: SimpleMDE.drawLink,
        className: 'fa fa-link',
        title: 'Inserir Link'
      }, {
        name: 'image',
        action: SimpleMDE.drawImage,
        className: 'fa fa-picture-o',
        title: 'Inserir Imagem'
      }, {
        name: 'table',
        action: SimpleMDE.drawTable,
        className: 'fa fa-table',
        title: 'Inserir Tabela'
      }, {
        name: 'horizontal-rule',
        action: SimpleMDE.drawHorizontalRule,
        className: 'fa fa-minus',
        title: 'Inserir Linha Horizontal'
      }, '|', {
        name: 'preview',
        action: SimpleMDE.togglePreview,
        className: 'fa fa-eye no-disable',
        title: 'Alternar Pré-visualização'
      }, {
        name: 'side-by-side',
        action: SimpleMDE.toggleSideBySide,
        className: 'fa fa-columns no-disable no-mobile',
        title: 'Alternar Lado a Lado'
      }, {
        name: 'fullscreen',
        action: SimpleMDE.toggleFullScreen,
        className: 'fa fa-arrows-alt no-disable no-mobile',
        title: 'Alternar Tela Cheia'
      }, '|', {
        name: 'guide',
        action: 'https://guides.github.com/features/mastering-markdown/',
        className: 'fa fa-question-circle',
        title: 'Guia de Markdown'
      }, '|', {
        name: 'undo',
        action: SimpleMDE.undo,
        className: 'fa fa-undo no-disable',
        title: 'Desfazer'
      }, {
        name: 'redo',
        action: SimpleMDE.redo,
        className: 'fa fa-repeat no-disable',
        title: 'Refazer'
      }],
      previewRender: (plainText, preview: HTMLDivElement) => {
        preview.innerHTML = this.markdownService.compile(plainText, true);
        const preElements = preview.querySelectorAll('pre');
        for (let i = 0; i < preElements.length; i++) {
            preElements.item(i).classList.add('line-numbers');
        }
        this.markdownService.highlight(preview);

        return preview.innerHTML;
      }
    });
  }

}

/*
 let compiled = this.markdownService.compile(markdown, decodeHtml);
  compiled = this.katex ? this.markdownService.renderKatex(compiled, this.katexOptions) : compiled;
  this.element.nativeElement.innerHTML = compiled;
  this.handlePlugins();
  this.markdownService.highlight(this.element.nativeElement);
  setPluginClass(element, plugin) {
      const preElements = element.querySelectorAll('pre');
      for (let i = 0; i < preElements.length; i++) {
          const classes = plugin instanceof Array ? plugin : [plugin];
          preElements.item(i).classList.add(...classes);
      }
  }
*/
