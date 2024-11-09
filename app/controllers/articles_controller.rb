class ArticlesController < ApplicationController
  before_action :authenticate_admin!, except: [:index, :show]
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authorize_admin!, only: [:edit, :update, :destroy]

  def index
    @articles = Article.all
  end

  def show

  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    @article.admin_id = current_admin.id 
    if @article.save
      redirect_to @article, notice: 'Publicação registrada com sucesso.'
    else
      logger.debug "Erro ao criar artigo: #{@article.errors.full_messages}"
      render :new, status: :unprocessable_entity
    end
  end

  def edit

  end

  def update
    if @article.update(article_params)
      redirect_to @article, notice: 'Artigo atualizado com sucesso.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @article.destroy
    redirect_to root_path, notice: 'Artigo excluído com sucesso.', status: :see_other
  end

  private

  def set_post
    @article = Article.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    flash[:alert] = "Artigo não encontrado."
    redirect_to articles_path
  end

  def article_params
    params.require(:article).permit(:title, :body, :status)
  end
  def authorize_user!
    unless @article.user == current_user
      flash[:alert] = "Você não tem permissão para realizar essa ação."
      redirect_to articles_path
    end
  end
end
